"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type AdminBook = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  externalLink: string;
  featured: boolean;
  coverImageUrl: string;
  imageAlt: string;
  price: number | null;
  pdfUrl: string;
};

type FormState = {
  title: string;
  slug: string;
  description: string;
  externalLink: string;
  featured: boolean;
  imageAlt: string;
  price: string;
};

const emptyForm: FormState = {
  title: "",
  slug: "",
  description: "",
  externalLink: "",
  featured: false,
  imageAlt: "",
  price: "",
};

export function AdminBooksManager() {
  const router = useRouter();
  const [books, setBooks] = useState<AdminBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [selectedPdfFile, setSelectedPdfFile] = useState<File | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);

  const editingBook = useMemo(() => books.find((book) => book._id === editingId) || null, [books, editingId]);

  async function loadBooks() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/books", { cache: "no-store" });
      const data = (await response.json()) as { books?: AdminBook[]; error?: string };
      if (!response.ok) {
        setError(data.error || "Unable to load books.");
        return;
      }

      setBooks(data.books || []);
    } catch {
      setError("Unexpected error while loading books.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  function updateForm<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function startCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setSelectedImageFile(null);
    setSelectedPdfFile(null);
    setError(null);
  }

  function startEdit(book: AdminBook) {
    setEditingId(book._id);
    setForm({
      title: book.title,
      slug: book.slug,
      description: book.description,
      externalLink: book.externalLink,
      featured: book.featured,
      imageAlt: book.imageAlt,
      price: book.price ? book.price.toString() : "",
    });
    setSelectedImageFile(null);
    setSelectedPdfFile(null);
    setError(null);
  }

  async function uploadImageIfNeeded() {
    if (!selectedImageFile) return null;

    const uploadData = new FormData();
    uploadData.append("file", selectedImageFile);
    uploadData.append("fileType", "image");

    const response = await fetch("/api/admin/books/upload", {
      method: "POST",
      body: uploadData,
    });

    const data = (await response.json()) as { assetId?: string; error?: string };
    if (!response.ok || !data.assetId) {
      throw new Error(data.error || "Image upload failed.");
    }

    return data.assetId;
  }

  async function uploadPdfIfNeeded() {
    if (!selectedPdfFile) return null;

    const uploadData = new FormData();
    uploadData.append("file", selectedPdfFile);
    uploadData.append("fileType", "pdf");

    const response = await fetch("/api/admin/books/upload", {
      method: "POST",
      body: uploadData,
    });

    const data = (await response.json()) as { assetId?: string; error?: string };
    if (!response.ok || !data.assetId) {
      throw new Error(data.error || "PDF upload failed.");
    }

    return data.assetId;
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    try {
      const imageAssetId = await uploadImageIfNeeded();
      const pdfAssetId = await uploadPdfIfNeeded();
      const payload = {
        ...form,
        imageAssetId,
        pdfAssetId,
      };

      const isEditing = Boolean(editingId);
      const response = await fetch(isEditing ? `/api/admin/books/${editingId}` : "/api/admin/books", {
        method: isEditing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "Save failed.");
      }

      startCreate();
      await loadBooks();
      router.refresh();
    } catch (submitError: any) {
      setError(submitError?.message || "Unexpected save error.");
    } finally {
      setPending(false);
    }
  }

  async function deleteBook(id: string) {
    if (!confirm("Delete this book? This action cannot be undone.")) return;

    setPending(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/books/${id}`, { method: "DELETE" });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "Delete failed.");
      }

      if (editingId === id) startCreate();
      await loadBooks();
      router.refresh();
    } catch (deleteError: any) {
      setError(deleteError?.message || "Unexpected delete error.");
    } finally {
      setPending(false);
    }
  }

  async function signOut() {
    setPending(true);
    setError(null);

    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-display text-3xl text-navy">{editingId ? "Edit book" : "Add new book"}</h2>
          <button
            type="button"
            onClick={startCreate}
            className="rounded-full border border-navy px-4 py-1 text-sm font-semibold text-navy"
          >
            New
          </button>
        </div>

        <form onSubmit={submitForm} className="space-y-4">
          <input
            required
            value={form.title}
            onChange={(event) => updateForm("title", event.target.value)}
            placeholder="Book title"
            className="w-full rounded-lg border border-ink/20 px-4 py-2 text-sm outline-none focus:border-navy"
          />
          <input
            value={form.slug}
            onChange={(event) => updateForm("slug", event.target.value)}
            placeholder="Slug (optional)"
            className="w-full rounded-lg border border-ink/20 px-4 py-2 text-sm outline-none focus:border-navy"
          />
          <textarea
            required
            rows={5}
            value={form.description}
            onChange={(event) => updateForm("description", event.target.value)}
            placeholder="Book description"
            className="w-full rounded-lg border border-ink/20 px-4 py-2 text-sm outline-none focus:border-navy"
          />
          <input
            required
            type="url"
            value={form.externalLink}
            onChange={(event) => updateForm("externalLink", event.target.value)}
            placeholder="https://example.com/buy-book"
            className="w-full rounded-lg border border-ink/20 px-4 py-2 text-sm outline-none focus:border-navy"
          />
          <input
            required
            value={form.imageAlt}
            onChange={(event) => updateForm("imageAlt", event.target.value)}
            placeholder="Image alt text"
            className="w-full rounded-lg border border-ink/20 px-4 py-2 text-sm outline-none focus:border-navy"
          />

          <input
            type="number"
            step="0.01"
            value={form.price}
            onChange={(event) => updateForm("price", event.target.value)}
            placeholder="Price in $ (optional)"
            className="w-full rounded-lg border border-ink/20 px-4 py-2 text-sm outline-none focus:border-navy"
          />

          <div className="flex items-center gap-3">
            <input
              id="featured"
              type="checkbox"
              checked={form.featured}
              onChange={(event) => updateForm("featured", event.target.checked)}
            />
            <label htmlFor="featured" className="text-sm text-ink">
              Featured book
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-ink">Cover image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setSelectedImageFile(event.target.files?.[0] || null)}
              className="block w-full text-sm"
            />
            {editingBook && !selectedImageFile ? (
              <p className="text-xs text-ink/70">Keep empty to preserve current image.</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-ink">Book PDF (optional)</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(event) => setSelectedPdfFile(event.target.files?.[0] || null)}
              className="block w-full text-sm"
            />
            {editingBook && !selectedPdfFile && editingBook.pdfUrl ? (
              <p className="text-xs text-ink/70">Keep empty to preserve current PDF.</p>
            ) : null}
          </div>

          {error ? <p className="text-sm text-red-700">{error}</p> : null}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={pending}
              className="btn-live rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {pending ? "Saving..." : editingId ? "Save changes" : "Create book"}
            </button>
            <button
              type="button"
              onClick={signOut}
              disabled={pending}
              className="rounded-full border border-ink/20 px-5 py-2 text-sm font-semibold text-ink"
            >
              Sign out
            </button>
          </div>
        </form>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="font-display text-3xl text-navy">Books</h2>
        {loading ? <p className="mt-4 text-sm text-ink/70">Loading books...</p> : null}
        {!loading && books.length === 0 ? <p className="mt-4 text-sm text-ink/70">No books found.</p> : null}

        <ul className="mt-4 space-y-3">
          {books.map((book) => (
            <li key={book._id} className="rounded-xl border border-black/10 p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-navy">{book.title}</p>
                  <p className="text-xs text-ink/70">/{book.slug}</p>
                  {book.featured ? <p className="mt-1 text-xs font-semibold text-green-700">Featured</p> : null}
                  {book.price ? <p className="mt-1 text-xs text-ink/75">${book.price.toFixed(2)}</p> : null}
                  {book.pdfUrl ? <p className="mt-1 text-xs text-blue-700">✓ PDF available</p> : null}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => startEdit(book)}
                    className="rounded-full border border-navy px-3 py-1 text-xs font-semibold text-navy"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteBook(book._id)}
                    className="rounded-full border border-red-300 px-3 py-1 text-xs font-semibold text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

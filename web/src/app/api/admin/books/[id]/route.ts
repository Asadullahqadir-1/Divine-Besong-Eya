import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/auth";
import {
  type AdminBookPayload,
  toMetaDescription,
  toPortableText,
  toSlug,
  validateBookPayload,
} from "@/lib/adminBooks";
import { hasValidSanityWriteConfig, sanityWriteClient } from "@/lib/sanity/writeClient";
import { deleteLocalBook, getLocalBooks, isVercelRuntime, updateLocalBook } from "@/lib/localBooksStore";

type Params = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, { params }: Params) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;

  let body: AdminBookPayload;
  try {
    body = (await request.json()) as AdminBookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const validationError = validateBookPayload(body, { requireImage: false });
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const title = body.title!.trim();
  const description = body.description!.trim();
  const externalLink = body.externalLink?.trim();
  const featured = Boolean(body.featured);
  const slug = toSlug(body.slug?.trim() || title);
  const priceStr = body.price?.trim() || "";
  const price = priceStr ? parseFloat(priceStr) : null;
  const pdfAsset = body.pdfAssetId?.trim() || "";

  if (!hasValidSanityWriteConfig()) {
    if (isVercelRuntime()) {
      return NextResponse.json(
        { error: "Admin write operations on Vercel require SANITY_API_WRITE_TOKEN." },
        { status: 503 }
      );
    }

    const localBooks = await getLocalBooks();
    const existingLocal = localBooks.find((book) => book._id === id);
    if (!existingLocal) {
      return NextResponse.json({ error: "Book not found." }, { status: 404 });
    }

    const localImageAsset = body.imageAssetId?.trim() || "";
    const nextLocalImageUrl = localImageAsset.startsWith("local-url:")
      ? localImageAsset.replace("local-url:", "")
      : existingLocal.coverImageUrl;

    const localPdfAsset = body.pdfAssetId?.trim() || "";
    const nextLocalPdfUrl = localPdfAsset.startsWith("local-url:")
      ? localPdfAsset.replace("local-url:", "")
      : existingLocal.pdfUrl;

    const updated = await updateLocalBook(id, {
      title,
      slug,
      description,
      externalLink: externalLink ?? existingLocal.externalLink,
      featured,
      coverImageUrl: nextLocalImageUrl,
      imageAlt: body.imageAlt?.trim() || existingLocal.imageAlt,
      price: price !== null ? price : existingLocal.price,
      pdfUrl: nextLocalPdfUrl,
    });

    if (!updated) {
      return NextResponse.json({ error: "Book not found." }, { status: 404 });
    }

    revalidatePath("/");
    revalidatePath("/books");
    return NextResponse.json({ ok: true });
  }

  const existing = await sanityWriteClient.getDocument(id);
  if (!existing || existing._type !== "book") {
    return NextResponse.json({ error: "Book not found." }, { status: 404 });
  }

  const currentAssetRef = existing.coverImage?.asset?._ref as string | undefined;
  const nextAssetRef = body.imageAssetId?.trim() || currentAssetRef;
  if (!nextAssetRef) {
    return NextResponse.json({ error: "Cover image is required." }, { status: 400 });
  }

  const currentAlt = (existing.coverImage?.alt as string | undefined) || "Book cover image";
  const nextAlt = body.imageAlt?.trim() || currentAlt;

  await sanityWriteClient
    .patch(id)
    .set({
      title,
      slug: { _type: "slug", current: slug },
      description: toPortableText(description),
      ...(externalLink !== undefined && { externalLink }),
      featured,
      ...(price !== null && { price }),
      ...(pdfAsset && { pdf: { _type: "file", asset: { _type: "reference", _ref: pdfAsset } } }),
      coverImage: {
        _type: "image",
        asset: { _type: "reference", _ref: nextAssetRef },
        alt: nextAlt,
      },
      seo: {
        _type: "seo",
        metaTitle: title.slice(0, 60),
        metaDescription: toMetaDescription(description),
      },
    })
    .commit();

  revalidatePath("/");
  revalidatePath("/books");

  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;

  if (!hasValidSanityWriteConfig()) {
    if (isVercelRuntime()) {
      return NextResponse.json(
        { error: "Admin write operations on Vercel require SANITY_API_WRITE_TOKEN." },
        { status: 503 }
      );
    }

    const deleted = await deleteLocalBook(id);
    if (!deleted) {
      return NextResponse.json({ error: "Book not found." }, { status: 404 });
    }

    revalidatePath("/");
    revalidatePath("/books");
    return NextResponse.json({ ok: true });
  }

  const existing = await sanityWriteClient.getDocument(id);
  if (!existing || existing._type !== "book") {
    return NextResponse.json({ error: "Book not found." }, { status: 404 });
  }

  await sanityWriteClient.delete(id);

  revalidatePath("/");
  revalidatePath("/books");

  return NextResponse.json({ ok: true });
}

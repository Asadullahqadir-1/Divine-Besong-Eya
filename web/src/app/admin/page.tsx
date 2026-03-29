import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { AdminBooksManager } from "@/components/admin/AdminBooksManager";
import { isAdminAuthenticated } from "@/lib/auth";

export const metadata = {
  title: "Admin Books | Divine Besong Eya",
};

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <Container className="py-14">
      <div className="mb-8">
        <h1 className="font-display text-4xl text-navy">Books Admin</h1>
        <p className="mt-2 text-sm text-ink/75">Create, edit, and delete book products published on your website.</p>
      </div>
      <AdminBooksManager />
    </Container>
  );
}

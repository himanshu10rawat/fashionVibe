import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";
import AdminSidebar from "@/components/admin/adminSidebar/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1">
        <AdminNavbar />
        <main className="p-10">{children}</main>
      </div>
    </div>
  );
}

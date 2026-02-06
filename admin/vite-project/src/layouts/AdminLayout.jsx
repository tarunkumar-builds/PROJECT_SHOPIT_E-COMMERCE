import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children, setToken }) {
  return (
    <>
      <Navbar setToken={setToken} />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-10">{children}</main>
      </div>
    </>
  );
}

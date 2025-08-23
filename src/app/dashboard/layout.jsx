"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu, HiOutlineHome, HiOutlineUser, HiOutlineShieldCheck, HiOutlinePlusCircle } from "react-icons/hi";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log('role: ', session?.user?.role)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // redirect if not logged in
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const userName = session?.user?.username || session?.user?.email;
  const userRole = session?.user?.role || "User";

  return (
    <div className="flex h-screen">
      {/* Mobile menu button */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden text-gray-800"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <HiMenu size={30} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-green-50 text-white p-4
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:flex-shrink-0 border border-gray-500/60
        `}
      >
        <ul className="space-y-3 mt-16">
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 p-3 rounded-lg bg-green-700 shadow-md hover:bg-green-600 hover:shadow-lg transition"
            >
              <HiOutlineHome size={20} />
              <span>Home</span>
            </Link>
          </li>
          {
            session?.user?.role === 'Admin' ? (
              <>
                <li>
                  <Link
                    href="/dashboard/dashboard-admin"
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-700 shadow-md hover:bg-green-600 hover:shadow-lg transition"
                  >
                    <HiOutlineShieldCheck size={20} />
                    <span>Admin Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/dashboard/dashboard-admin/add-product"
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-700 shadow-md hover:bg-green-600 hover:shadow-lg transition"
                  >
                    <HiOutlinePlusCircle size={20} />
                    <span>Add Product</span>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/dashboard/dashboard-user"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-700 shadow-md hover:bg-green-600 hover:shadow-lg transition"
                >
                  <HiOutlineUser size={20} />
                  <span>User Dashboard</span>
                </Link>
              </li>
            )
          }

        </ul>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Navbar */}
        <nav className="bg-green-100 border-b border-gray-500/50 px-6 py-8 md:py-4  flex justify-between items-center shadow-sm">
          <h1 className="text-xl font-bold text-gray-800 hidden md:block ">Dashboard</h1>
          <div className="text-gray-700 pl-10 md:pl-0 hidden md:block">
            <span className="font-semibold">{userName}</span> ({userRole})
          </div>
        </nav>
        {/* Actual page content */}
        <section className="bg-white">{children}</section>
      </main>
    </div>
  );
}


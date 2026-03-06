"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Add Product", href: "/dashboard/add-product" },
    { name: "Manage Products", href: "/dashboard/manage-products" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block rounded-2xl">
        <h2 className="text-2xl font-bold mb-8">GadgetHub</h2>

        <nav className="space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === link.href ? "bg-cyan-600" : "hover:bg-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-50 dark:bg-gray-950 p-6">{children}</main>
    </div>
  );
}

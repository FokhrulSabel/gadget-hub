"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Add Product", href: "/dashboard/add-product" },
    { name: "Manage Products", href: "/dashboard/manage-products" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 flex gap-6">
      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-20 left-4 z-50 bg-cyan-700 text-white p-2 rounded-lg"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 bg-gray-900 text-white p-6 transform transition-transform rounded-r-2xl md:rounded-2xl
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-8">GadgetHub</h2>

        <nav className="space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
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
      <main className="flex-1 bg-gray-50 dark:bg-gray-950 p-6 rounded-2xl">
        {children}
      </main>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Logo from "@/components/ui/Logo";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-borderColor">
      <div className="container-custom flex items-center justify-between h-16">
        {/* LOGO */}
        <Logo />

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-primary transition-colors"
          >
            Products
          </Link>

          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* CART */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
            <ShoppingCart className="w-5 h-5" />
          </button>

          {/* AUTH */}
          {!session ? (
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>

              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </div>
          ) : (
            <Dropdown
              trigger={
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                    {session.user?.name?.charAt(0) || "U"}
                  </div>

                  <span className="hidden md:block font-medium">
                    {session.user.name || "User"}
                  </span>
                </div>
              }
            >
              <div className="flex flex-col p-2 min-w-[160px]">
                <Link
                  href="/dashboard"
                  className="px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-left px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
    </header>
  );
}

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
    <header
      className="
      sticky top-0 z-50
      backdrop-blur-xl
      bg-white/70
      border-b border-white/30
      shadow-sm
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link
            href="/"
            className="
            relative text-[#03045E]
            hover:text-[#0077B6]
            transition
            after:absolute after:-bottom-1 after:left-0
            after:w-0 after:h-[2px]
            after:bg-gradient-to-r after:from-[#0077B6] after:to-[#00B4D8]
            after:transition-all
            hover:after:w-full
            "
          >
            Home
          </Link>

          <Link
            href="/products"
            className="
            relative text-[#03045E]
            hover:text-[#0077B6]
            transition
            after:absolute after:-bottom-1 after:left-0
            after:w-0 after:h-[2px]
            after:bg-gradient-to-r after:from-[#0077B6] after:to-[#00B4D8]
            after:transition-all
            hover:after:w-full
            "
          >
            Products
          </Link>

          <Link
            href="/about"
            className="
            relative text-[#03045E]
            hover:text-[#0077B6]
            transition
            after:absolute after:-bottom-1 after:left-0
            after:w-0 after:h-[2px]
            after:bg-gradient-to-r after:from-[#0077B6] after:to-[#00B4D8]
            after:transition-all
            hover:after:w-full
            "
          >
            About
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button
            className="
            relative
            p-2
            rounded-xl
            transition
            hover:bg-[#CAF0F8]
            hover:scale-105
          "
          >
            <ShoppingCart className="w-5 h-5 text-[#03045E]" />
          </button>

          {/* Auth */}
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
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div
                    className="
                    w-9 h-9
                    rounded-full
                    flex items-center justify-center
                    font-semibold
                    text-white
                    bg-gradient-to-r from-[#0077B6] to-[#00B4D8]
                    shadow-md
                    group-hover:scale-105
                    transition
                  "
                  >
                    {session.user?.name?.charAt(0) || "U"}
                  </div>

                  <span className="hidden md:block font-medium text-[#03045E]">
                    {session.user?.name || "User"}
                  </span>
                </div>
              }
            >
              <div className="flex flex-col p-2 min-w-[180px]">
                <Link
                  href="/dashboard"
                  className="px-3 py-2 rounded-lg hover:bg-[#CAF0F8]"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-left px-3 py-2 rounded-lg hover:bg-[#CAF0F8]"
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

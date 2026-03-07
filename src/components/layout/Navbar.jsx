"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { ShoppingCart, Menu, X, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/products">
            Products
          </Link>
          <Link className="nav-link" href="/about">
            About
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
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

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {!session ? (
              <div className="flex items-center gap-2">
                {/* Login */}
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 px-3 md:px-4"
                  >
                    <LogIn className="w-4 h-4" />
                    <span className="hidden md:inline">Login</span>
                  </Button>
                </Link>

                {/* Register */}
                <Link href="/register">
                  <Button className="flex items-center gap-2 px-3 md:px-4">
                    <UserPlus className="w-4 h-4" />
                    <span className="hidden md:inline">Register</span>
                  </Button>
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
                    "
                    >
                      {session.user?.name?.charAt(0) || "U"}
                    </div>

                    <span className="font-medium text-[#03045E]">
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-[#CAF0F8]"
          >
            {open ? (
              <X className="w-6 h-6 text-[#03045E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#03045E]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          md:hidden
          border-t border-gray-200
          bg-white
          px-6 py-6
          space-y-4
        "
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-[#03045E] font-medium"
          >
            Home
          </Link>

          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="block text-[#03045E] font-medium"
          >
            Products
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block text-[#03045E] font-medium"
          >
            About
          </Link>

          <div className="border-t pt-4 space-y-3">
            {!session ? (
              <div className="flex items-center gap-2">
                {/* Login */}
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 px-3 md:px-4"
                  >
                    <LogIn className="w-4 h-4" />
                    <span className="">Login</span>
                  </Button>
                </Link>

                {/* Register */}
                <Link href="/register">
                  <Button className="flex items-center gap-2 px-3 md:px-4">
                    <UserPlus className="w-4 h-4" />
                    <span className="">Register</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block font-medium text-[#03045E]"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-left font-medium text-[#03045E]"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

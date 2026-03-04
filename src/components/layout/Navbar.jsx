"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          GadgetHub
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>

          {!session ? (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          ) : (
            <Dropdown
              trigger={
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {session.user.name || "User"}
                  </span>
                </div>
              }
            >
              <div className="flex flex-col p-2">
                <Link
                  href="/dashboard"
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Logout
                </button>
              </div>
            </Dropdown>
          )}
        </nav>
      </div>
    </header>
  );
}

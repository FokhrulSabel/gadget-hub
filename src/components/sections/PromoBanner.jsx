"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white">
      <h2 className="text-3xl md:text-4xl font-bold">Limited Time Deal</h2>

      <p className="mt-3 mb-6 text-white/90">
        Save up to 20% on our most popular gadgets.
      </p>

      <Link href="/products">
        <Button variant="secondary">Shop Deals</Button>
      </Link>
    </section>
  );
}

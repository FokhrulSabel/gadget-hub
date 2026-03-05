"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-16 bg-cyan-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Limited Time Offer – 20% Off</h2>
      <Link href="/products">
        <Button variant="secondary">Shop Now</Button>
      </Link>
    </section>
  );
}

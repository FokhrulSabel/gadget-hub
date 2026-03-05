"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Next-Gen Tech at Your Fingertips
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover premium gadgets designed for modern living.
        </p>
        <Link href="/products">
          <Button variant="secondary">Explore Products</Button>
        </Link>
      </div>
    </section>
  );
}

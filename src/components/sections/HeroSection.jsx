"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00B4D8]/20 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#03045E]">
          Next-Generation
          <span className="block bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
            Tech for Modern Life
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover premium gadgets designed to elevate productivity,
          entertainment, and everyday experiences.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <Link href="/products">
            <Button>Explore Products</Button>
          </Link>

          <Link href="/about">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

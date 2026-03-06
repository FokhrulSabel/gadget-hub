"use client";

import { useEffect, useState } from "react";
import Skeleton from "@/components/ui/Skeleton";
import ProductCard from "../Product/ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data.slice(0, 4));
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#CAF0F8]/30 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]">
            Featured Products
          </h2>

          <p className="text-gray-600 mt-3">
            Discover the latest innovations hand-picked for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <Skeleton key={i} className="h-80 w-full" />)
            : products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
}

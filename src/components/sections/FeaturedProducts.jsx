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
    <section className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

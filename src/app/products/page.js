"use client";

import ProductCard from "@/components/Product/ProductCard";
import Skeleton from "@/components/ui/Skeleton";
import { useEffect, useState } from "react";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(`/api/products?search=${search}`);
    const data = await res.json();
    setProducts(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900 min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3">Explore Our Products</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Find the latest and most innovative tech gadgets.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-cyan-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array(8)
              .fill(0)
              .map((_, i) => <Skeleton key={i} className="h-80 w-full" />)
          ) : products.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">No products found.</p>
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

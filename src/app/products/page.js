"use client";

import ProductCard from "@/components/Product/ProductCard";
import Skeleton from "@/components/ui/Skeleton";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const res = await fetch(
        `/api/products?page=${page}&limit=8&search=${debouncedSearch}`,
      );

      const data = await res.json();

      setProducts(data.data);
      setTotalPages(data.pagination.totalPages);

      setLoading(false);
    };

    fetchProducts();
  }, [page, debouncedSearch]);

  return (
    <section className="py-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Discover Amazing Tech</h1>

          <p className="text-gray-500 dark:text-gray-400">
            Browse our curated gadget collection
          </p>
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-12">
          <input
            type="text"
            placeholder="Search gadgets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full px-5 py-3
            rounded-xl
            border border-gray-200
            dark:border-slate-700
            bg-white dark:bg-slate-800
            focus:ring-2 focus:ring-cyan-500
            outline-none
            shadow-sm
            "
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array(8)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-80 w-full rounded-xl" />
              ))
          ) : products.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg">No products found.</p>
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="
              px-4 py-2 rounded-lg
              border
              disabled:opacity-40
              hover:bg-gray-100
              dark:hover:bg-slate-800
              "
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`
                px-4 py-2 rounded-lg border
                ${
                  page === i + 1
                    ? "bg-cyan-600 text-white border-cyan-600"
                    : "hover:bg-gray-100 dark:hover:bg-slate-800"
                }
                `}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="
              px-4 py-2 rounded-lg
              border
              disabled:opacity-40
              hover:bg-gray-100
              dark:hover:bg-slate-800
              "
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

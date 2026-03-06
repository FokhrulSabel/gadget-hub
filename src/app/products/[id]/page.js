"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Skeleton from "@/components/ui/Skeleton";
import Button from "@/components/ui/Button";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <Skeleton className="h-[420px] w-full mb-6 rounded-xl" />
        <Skeleton className="h-10 w-1/2 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-24">
        <p className="text-xl text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <section className="py-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <Button
          variant="outline"
          className="mb-10"
          onClick={() => router.back()}
        >
          ← Back
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <p className="text-sm text-gray-500 mb-2">{product.brand}</p>

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <p className="text-3xl font-bold text-cyan-600 mb-6">
              ${product.price}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-8">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                <p className="text-gray-500">Stock</p>
                <p className="font-semibold">{product.stock}</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                <p className="text-gray-500">Rating</p>
                <p className="font-semibold">{product.rating} ⭐</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button className="flex-1">Add to Cart</Button>

              <Button variant="secondary">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

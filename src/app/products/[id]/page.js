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
        <Skeleton className="h-96 w-full mb-6" />
        <Skeleton className="h-8 w-1/2 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900 min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4">
        <Button
          variant="outline"
          className="mb-8"
          onClick={() => router.back()}
        >
          ← Back
        </Button>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <h2 className="text-2xl font-bold mb-4">{product.brand}</h2>

            <p className="text-2xl font-semibold text-cyan-600 mb-6">
              ${product.price}
            </p>

            <div className="mb-6 text-gray-600 dark:text-gray-300">
              {product.description}
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              {/* <p>Created: {new Date(product.createdAt).toLocaleDateString()}</p> */}
              <p>Stock: {product.stock}</p>
              <p>Rating: {product.rating}</p>
            </div>

            <Button className="mt-6 w-full">Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

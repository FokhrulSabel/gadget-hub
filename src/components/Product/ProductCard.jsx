"use client";

import Link from "next/link";
import Card from "../ui/Card";
import Button from "../ui/Button";


export default function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        <div className="mt-4">
          <p className="font-bold text-cyan-600">${product.price}</p>

          <Link href={`/products/${product._id}`}>
            <Button className="w-full mt-2">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

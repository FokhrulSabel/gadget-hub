"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
      group
      rounded-2xl
      overflow-hidden
      bg-white/80
      backdrop-blur-lg
      border border-white/40
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      flex
      flex-col
      "
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
          h-52
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
          "
        />

        {/* Glow Overlay */}
        <div
          className="
        absolute inset-0
        bg-gradient-to-t
        from-black/20
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition
        "
        />
      </div>

      {/* Product Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="
        font-semibold
        text-lg
        text-[#03045E]
        group-hover:text-[#0077B6]
        transition
        "
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className="
        text-sm
        text-gray-500
        mt-1
        line-clamp-2
        flex-1
        "
        >
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="mt-5">
          <p
            className="
          font-bold
          text-lg
          bg-gradient-to-r
          from-[#0077B6]
          to-[#00B4D8]
          bg-clip-text
          text-transparent
          "
          >
            ${product.price}
          </p>

          <Link href={`/products/${product._id}`}>
            <Button className="w-full mt-3">View Details</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

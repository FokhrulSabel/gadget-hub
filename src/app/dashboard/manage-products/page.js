"use client";

import { useEffect, useState } from "react";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-xl p-4">
            <img
              src={product.image}
              className="h-40 w-full object-cover rounded-lg"
            />

            <h2 className="font-semibold mt-3">{product.title}</h2>

            <p className="text-gray-500">${product.price}</p>

            <button
              onClick={() => handleDelete(product._id)}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

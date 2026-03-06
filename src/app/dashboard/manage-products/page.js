"use client";

import { useEffect, useState } from "react";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Delete this product?");

    if (!confirmDelete) return;

    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-slate-800 text-left">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td className="p-6">Loading...</td>
              </tr>
            )}

            {products.map((product) => (
              <tr
                key={product._id}
                className="border-t hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={product.image}
                    className="w-12 h-12 rounded object-cover"
                  />

                  <span className="font-medium">{product.name}</span>
                </td>

                <td className="p-4 text-gray-500">{product.category}</td>

                <td className="p-4 font-semibold text-cyan-600">
                  ${product.price}
                </td>

                <td className="p-4">{product.stock}</td>

                <td className="p-4">⭐ {product.rating || "N/A"}</td>

                <td className="p-4">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const product = {
      name: form.name.value,
      price: Number(form.price.value),
      category: form.category.value,
      image: form.image.value,
      description: form.description.value,
      stock: Number(form.stock.value),
      rating: Number(form.rating.value),
      createdAt: new Date(),
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        alert("Product Added Successfully");
        form.reset();
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Product Name"
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="category"
          placeholder="Category"
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="image"
          placeholder="Image URL"
          required
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Product Description"
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock Quantity"
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

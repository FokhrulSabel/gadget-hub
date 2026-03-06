"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");

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
        alert("✅ Product Added Successfully");
        form.reset();
        setPreview("");
      } else {
        alert("❌ Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-8">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Product Name
            </label>

            <input
              name="name"
              required
              className="w-full border rounded-lg p-3"
              placeholder="iPhone 15 Pro"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium mb-1 block">Category</label>

            <input
              name="category"
              required
              className="w-full border rounded-lg p-3"
              placeholder="Smartphones"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-medium mb-1 block">Price</label>

            <input
              name="price"
              type="number"
              required
              className="w-full border rounded-lg p-3"
              placeholder="$999"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="text-sm font-medium mb-1 block">Stock</label>

            <input
              name="stock"
              type="number"
              required
              className="w-full border rounded-lg p-3"
              placeholder="50"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="text-sm font-medium mb-1 block">Rating</label>

            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              className="w-full border rounded-lg p-3"
              placeholder="4.5"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm font-medium mb-1 block">Image URL</label>

            <input
              name="image"
              required
              className="w-full border rounded-lg p-3"
              placeholder="https://image-url.com"
              onChange={(e) => setPreview(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-1 block">
              Description
            </label>

            <textarea
              name="description"
              rows="4"
              required
              className="w-full border rounded-lg p-3"
              placeholder="Product description..."
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="md:col-span-2">
              <p className="text-sm mb-2 text-gray-500">Image Preview</p>

              <img
                src={preview}
                className="h-48 rounded-lg object-cover border"
              />
            </div>
          )}

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg w-full"
            >
              {loading ? "Adding Product..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

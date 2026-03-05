import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">GadgetHub Dashboard</h1>

      <p className="text-gray-600 mb-8">
        Manage your products easily from here.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/dashboard/add-product"
          className="p-6 border rounded-xl hover:shadow transition"
        >
          <h2 className="text-xl font-semibold mb-2">Add Product</h2>
          <p className="text-gray-500">Create a new product for the store.</p>
        </Link>

        <Link
          href="/dashboard/manage-products"
          className="p-6 border rounded-xl hover:shadow transition"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
          <p className="text-gray-500">View and delete existing products.</p>
        </Link>
      </div>
    </div>
  );
}

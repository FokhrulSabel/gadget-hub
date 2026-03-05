export default function CategoriesSection() {
  const categories = ["Smartphones", "Wearables", "Audio", "Accessories"];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

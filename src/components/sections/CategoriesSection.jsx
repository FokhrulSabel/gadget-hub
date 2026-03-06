import { Smartphone, Headphones, Watch, Cable } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    { name: "Smartphones", icon: Smartphone },
    { name: "Wearables", icon: Watch },
    { name: "Audio", icon: Headphones },
    { name: "Accessories", icon: Cable },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]">
          Shop by Category
        </h2>

        <p className="text-gray-600 mt-3 mb-12">
          Find the perfect gadget for every need.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <div
                key={i}
                className="
                group
                p-8
                rounded-2xl
                bg-white/80
                backdrop-blur-lg
                border border-white/40
                shadow-md
                transition
                hover:-translate-y-1
                hover:shadow-xl
                cursor-pointer
                "
              >
                <Icon className="w-8 h-8 mx-auto text-[#0077B6] group-hover:scale-110 transition" />

                <p className="mt-4 font-semibold text-[#03045E]">{cat.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

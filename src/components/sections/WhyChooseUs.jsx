export default function WhyChooseUs() {
  const features = [
    "Premium Quality",
    "Fast Delivery",
    "Secure Payment",
    "24/7 Support",
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose GadgetHub?</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

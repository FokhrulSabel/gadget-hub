export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-10">
          What Our Customers Say
        </h2>

        <div
          className="
          p-10
          rounded-2xl
          bg-white/80
          backdrop-blur-lg
          shadow-lg
          border border-white/40
        "
        >
          <p className="text-lg text-gray-600">
            “GadgetHub delivered an amazing experience. The product quality is
            outstanding and shipping was incredibly fast.”
          </p>

          <p className="mt-4 font-semibold text-[#0077B6]">— Alex Morgan</p>
        </div>
      </div>
    </section>
  );
}

import { ShieldCheck, Truck, CreditCard, Headset } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { icon: ShieldCheck, title: "Premium Quality" },
    { icon: Truck, title: "Fast Delivery" },
    { icon: CreditCard, title: "Secure Payment" },
    { icon: Headset, title: "24/7 Support" },
  ];

  return (
    <section className="py-24 bg-[#CAF0F8]/40">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-12">
          Why Choose GadgetHub
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                p-8
                rounded-2xl
                bg-white
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition
                "
              >
                <Icon className="w-8 h-8 mx-auto text-[#0077B6]" />

                <p className="mt-4 font-semibold text-[#03045E]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

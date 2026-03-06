"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  PlusCircle,
  BarChart3,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Products",
      value: "128",
      icon: Package,
    },
    {
      title: "Orders",
      value: "842",
      icon: ShoppingCart,
    },
    {
      title: "Customers",
      value: "1,204",
      icon: Users,
    },
    {
      title: "Revenue",
      value: "$32,540",
      icon: TrendingUp,
    },
  ];

  const actions = [
    {
      title: "Add Product",
      description: "Create a new product listing",
      href: "/dashboard/add-product",
      icon: PlusCircle,
    },
    {
      title: "Manage Products",
      description: "Edit or remove products",
      href: "/dashboard/manage-products",
      icon: Package,
    },
    // {
    //   title: "Analytics",
    //   description: "View store performance",
    //   href: "/dashboard/analytics",
    //   icon: BarChart3,
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0077B6] to-[#00B4D8] p-6 rounded-2xl">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-white">GadgetHub Dashboard</h1>

          <p className="text-[#CAF0F8] mt-2">
            Manage your products, orders and analytics from one place.
          </p>
        </div>

        {/* QUICK ACTIONS */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {actions.map((action, index) => {
              const Icon = action.icon;

              return (
                <Link key={index} href={action.href}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-[#00B4D8]/20 text-[#CAF0F8] group-hover:bg-[#00B4D8]/40 transition">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {action.title}
                      </h3>
                    </div>

                    <p className="text-[#CAF0F8] text-sm">
                      {action.description}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* STATS */}
        {/* Future Update Dynamic Data form database */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#CAF0F8] text-sm">{stat.title}</p>

                    <h3 className="text-2xl font-bold text-white mt-1">
                      {stat.value}
                    </h3>
                  </div>

                  <div className="p-3 rounded-xl bg-white/10 text-white">
                    <Icon size={22} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ACTIVITY SECTION */}
        {/* Future Update Dynamic Data form database */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-[#CAF0F8] text-sm">
            <li>✔ New product added: SmartWatch Pro</li>
            <li>✔ Order #8421 placed</li>
            <li>✔ Product stock updated</li>
            <li>✔ New customer registered</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

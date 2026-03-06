"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">About GadgetHub</h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          GadgetHub is a modern eCommerce platform designed to help people
          discover the best tech gadgets with a simple, fast, and beautiful
          shopping experience.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.img
          src="/about.jpg"
          alt="About GadgetHub"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Our mission is to make technology accessible and enjoyable for
            everyone. We carefully select high-quality gadgets that improve
            everyday life.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            GadgetHub focuses on speed, simplicity, and reliability so customers
            can find the perfect products without confusion.
          </p>
        </motion.div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Card className="p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Quality Products</h3>

            <p className="text-gray-500 text-sm">
              Every gadget in our store is carefully selected for performance
              and reliability.
            </p>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Card className="p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Fast Experience</h3>

            <p className="text-gray-500 text-sm">
              Built with modern web technology to ensure fast loading and smooth
              browsing.
            </p>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Card className="p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Secure Shopping</h3>

            <p className="text-gray-500 text-sm">
              We prioritize security and privacy to protect every customer
              transaction.
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Built with Passion</h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          GadgetHub was created by developers passionate about building modern
          web applications using technologies like Next.js, MongoDB, and
          Tailwind CSS.
        </p>
      </motion.div>
    </div>
  );
}

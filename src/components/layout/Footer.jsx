"use client";

import { Github, Twitter, Linkedin, Facebook } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative mt-34 border-t border-white/20 bg-gradient-to-b from-[#CAF0F8]/30 to-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Discover the latest gadgets and modern tech accessories. GadgetHub
              delivers innovation with style and reliability.
            </p>

            <div className="flex gap-4 mt-6">
              <Github className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#0077B6] transition hover:scale-110" />
              <Twitter className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#0077B6] transition hover:scale-110" />
              <Linkedin className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#0077B6] transition hover:scale-110" />
              <Facebook className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#0077B6] transition hover:scale-110" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg text-[#03045E] mb-4">Shop</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a className="hover:text-[#0077B6] transition">All Products</a>
              </li>

              <li>
                <a className="hover:text-[#0077B6] transition">New Arrivals</a>
              </li>

              <li>
                <a className="hover:text-[#0077B6] transition">Best Sellers</a>
              </li>

              <li>
                <a className="hover:text-[#0077B6] transition">Deals</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg text-[#03045E] mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a className="hover:text-[#0077B6] transition">About</a>
              </li>

              <li>
                <a className="hover:text-[#0077B6] transition">Careers</a>
              </li>

              <li>
                <a className="hover:text-[#0077B6] transition">Blog</a>
              </li>

              <li>
                <a className="hover:text-[#0077B6] transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg text-[#03045E] mb-4">
              Stay Updated
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Subscribe for latest gadget releases and exclusive deals.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="
                flex-1
                px-4 py-2.5
                rounded-l-xl
                border border-[#CAF0F8]
                bg-white/80
                backdrop-blur-md
                outline-none
                focus:ring-2
                focus:ring-[#90E0EF]
                "
              />

              <button
                className="
                px-5
                rounded-r-xl
                text-white
                font-medium
                bg-gradient-to-r
                from-[#0077B6]
                to-[#00B4D8]
                hover:opacity-90
                transition
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} GadgetHub. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-[#0077B6] transition">Privacy</a>

            <a className="hover:text-[#0077B6] transition">Terms</a>

            <a className="hover:text-[#0077B6] transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

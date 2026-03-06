import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-borderColor mt-20">
      <div className="container-custom py-16">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary">GadgetHub</h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Discover the latest tech gadgets, accessories, and electronics. We
              bring modern technology closer to you with style and reliability.
            </p>
            <div className="flex gap-4 mt-5">
              <Github className="w-5 h-5 cursor-pointer hover:text-primary transition" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary transition" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Discount Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get the latest tech updates and exclusive offers.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="input rounded-r-none"
              />
              <button className="bg-primary text-white px-4 rounded-r-md hover:bg-primaryHover">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-borderColor mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} GadgetHub. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="#" className="hover:text-primary">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

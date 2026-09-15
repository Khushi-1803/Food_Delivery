

import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="mt-16">
      {/* Wave */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-28 block"
          preserveAspectRatio="none"
        >
          <path
            fill="#F97316"
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,120L0,120Z"
          />
        </svg>
      </div>

      {/* Footer */}
      <div className="bg-orange-500 text-white px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Main Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-10 sm:py-12 md:py-14">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight">
                ShopKart
              </h2>

              <p className="text-orange-100 text-sm leading-6 mt-4 max-w-sm mx-auto sm:mx-0">
                Your one-stop destination for quality products at affordable
                prices. Shop smarter, shop better, shop with ShopKart.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center sm:justify-start gap-3 mt-6">
                <button
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20
                  flex items-center justify-center text-lg
                  hover:bg-white hover:text-orange-500
                  transition-all duration-300 cursor-pointer"
                >
                  📘
                </button>

                <button
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20
                  flex items-center justify-center text-lg
                  hover:bg-white hover:text-orange-500
                  transition-all duration-300 cursor-pointer"
                >
                  📷
                </button>

                <button
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20
                  flex items-center justify-center text-lg
                  hover:bg-white hover:text-orange-500
                  transition-all duration-300 cursor-pointer"
                >
                  🐦
                </button>
              </div>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-4">
                Company
              </h3>

              <ul className="space-y-3 text-orange-100 text-sm">
                <li
                  onClick={() => navigate("/aboutus")}
                  className="hover:text-white hover:translate-x-1
                  cursor-pointer transition-all duration-200"
                >
                  About Us
                </li>

                <li
                  onClick={() => navigate("/contact")}
                  className="hover:text-white hover:translate-x-1
                  cursor-pointer transition-all duration-200"
                >
                  Contact
                </li>

                <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-200">
                  Careers
                </li>

                <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-200">
                  Blog
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-4">
                Support
              </h3>

              <ul className="space-y-3 text-orange-100 text-sm">
                <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-200">
                  Help Center
                </li>

                <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-200">
                  Returns
                </li>

                <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-200">
                  Privacy Policy
                </li>

                <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-200">
                  Terms & Conditions
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="bg-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
                <h3 className="font-bold text-lg">
                  Stay Updated
                </h3>

                <p className="text-orange-100 text-sm mt-2 leading-5">
                  Subscribe to get the latest offers and updates.
                </p>

                {/* Email */}
                <div
                  className="flex mt-5 bg-white rounded-xl
                  overflow-hidden p-1"
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full min-w-0 px-3 py-2.5
                    text-gray-700 placeholder-gray-400
                    bg-transparent text-sm outline-none"
                  />

                  <button
                    className="bg-orange-500 text-white
                    font-semibold px-4 py-2 rounded-lg
                    hover:bg-orange-600 transition-colors
                    text-sm cursor-pointer"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div
            className="border-t border-white/20
            py-5 sm:py-6
            flex flex-col sm:flex-row
            items-center justify-between
            gap-3
            text-center sm:text-left"
          >
            <p className="text-white/80 text-xs sm:text-sm">
              © 2026 ShopKart. All rights reserved.
            </p>

            <p className="text-white/70 text-xs sm:text-sm">
              Made with ❤️ for better shopping
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

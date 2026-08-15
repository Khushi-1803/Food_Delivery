const Footer = () => {
  return (
    <footer className="mt-10">
      {/* Wave */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 md:h-28"
          preserveAspectRatio="none"
        >
          <path
            fill="#F97316"
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,120L0,120Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-orange-500 text-white px-6 md:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold mb-3">ShopKart</h2>
            <p className="text-gray-300 text-sm leading-6">
              Your one-stop destination for quality products at affordable
              prices.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <div className="flex border-2 border-gray-300 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-lg px-3 py-2 text-white outline-none"
              />
              <button className="bg-white text-black font-semibold px-5 rounded-r-lg hover:bg-orange-300 transition">
                Join
              </button>
            </div>

            <div className="flex gap-4 mt-5 text-xl">
              <span className="cursor-pointer hover:text-lime-300">📘</span>
              <span className="cursor-pointer hover:text-lime-300">📷</span>
              <span className="cursor-pointer hover:text-lime-300">🐦</span>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-10 pt-6 text-center text-black text-sm">
          © 2026 ShopKart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
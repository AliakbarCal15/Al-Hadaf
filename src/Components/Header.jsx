// src/components/Header.jsx
import { useState, useEffect } from "react";

function Header() {
  // Track if user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // If scrolled > 50px, change style
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      style={{
        padding: "15px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/src/assets/logo.png"
          alt="Company Logo"
          className="h-10 w-auto"
        />
        <span
          className={`text-xl font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Powder Wonder
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        {["Home", "Services", "About Us", "Gallery", "Videos", "Testimonials", "Contact Us"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-black hover:text-yellow-600" : "text-white hover:text-yellow-400"
              }`}
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* Right-side Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <span className="text-sm text-gray-500">📍 Malad West</span>
        <button
          className="px-4 py-2 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600"
        >
          Enquire Now
        </button>
      </div>
    </header>
  );
}

export default Header;

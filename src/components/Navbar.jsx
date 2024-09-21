"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", label: "Beranda", icon: "🏠" },
    { href: "/tentang", label: "Tentang", icon: "ℹ️" },
    { href: "/faq", label: "FAQ", icon: "❓" },
    { href: "/product-catalog", label: "Product Catalog", icon: "📦" },
    {
      href: "https://wa.me/+62882003310360",
      label: "WhatsApp",
      icon: "💬",
      external: true,
    },
  ];

  return (
    <nav className="bg-white text-green-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors"
            >
              Toko Mbah Manto
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                className="relative ml-8 first:ml-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center text-sm font-medium ${
                    activeItem === item.href
                      ? "text-green-700"
                      : "text-green-600 hover:text-green-700"
                  } transition-colors`}
                  onClick={() => setActiveItem(item.href)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
                {activeItem === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                    layoutId="underline"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-green-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors"
              onClick={toggleMenu}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  variants={{
                    open: { d: "M6 18L18 6M6 6l12 12" },
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  }}
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-4">
                <button
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <ul className="mt-8 space-y-4">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.href}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveItem(item.href);
                          toggleMenu();
                        }}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className={`flex items-center text-lg font-medium ${
                          activeItem === item.href
                            ? "text-green-700"
                            : "text-green-600"
                        } hover:text-green-700 transition-colors`}
                      >
                        <span className="mr-3 text-2xl">{item.icon}</span>
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

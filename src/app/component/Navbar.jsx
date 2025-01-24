"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkArr = [
    { href: "/", label: "Home" },
    { href: "/community", label: "Community" },
    { href: "/support", label: "Support" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0A4958] text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold">
          IslamicMatch
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {linkArr.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={handleToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-tr from-slate-950 to-gray-800 z-50 flex flex-col items-center justify-center space-y-4 md:hidden"
          role="dialog"
          aria-hidden={!isOpen}
        >
          {linkArr.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-medium py-2 px-6 hover: sha"
              onClick={handleToggle}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

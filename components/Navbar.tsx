"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (!isOpen) {
        if (scrollY > heroHeight) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 flex w-full z-50 p-6 transition-all duration-700 ease-in-out ${
          isVisible || isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="text-gray-800 font-bold">LOGO</div>

          {/* Burger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 text-gray-800 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Simple Dynamic Burger Icon */}
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex text-[18px] space-x-10 text-gray-800">
            <Link href="/about">Par Biedrību</Link>
            <Link href="/projects">Projekti</Link>
            <Link href="/contacts">Kontakti</Link>
          </ul>
        </div>
      </nav>

      {/* Insert the Mobile Component */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;

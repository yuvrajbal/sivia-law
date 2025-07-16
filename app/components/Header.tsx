"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (navOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [navOpen]);

  const mobileMenu = navOpen && mounted
    ? createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 z-[100]" onClick={() => setNavOpen(false)} />
          {/* Menu modal */}
          <div className="relative bg-white rounded-xl shadow-lg w-11/12 max-w-xs mx-auto p-8 flex flex-col items-center z-[110]">
            <button
              className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
              aria-label="Close navigation menu"
              onClick={() => setNavOpen(false)}
            >
              <X className="w-7 h-7 text-[#1D2B53]" />
            </button>
            <nav className="flex flex-col gap-6 items-center text-[#1D2B53] text-xl font-semibold mt-4 font-serif">
              <a href="#" onClick={() => setNavOpen(false)} className="hover:text-[#2E8B57] transition">Home</a>
              <a href="#about" onClick={() => setNavOpen(false)} className="hover:text-[#2E8B57] transition">About</a>
              <a href="#services" onClick={() => setNavOpen(false)} className="hover:text-[#2E8B57] transition">Services</a>
              <a href="#testimonials" onClick={() => setNavOpen(false)} className="hover:text-[#2E8B57] transition">Testimonials</a>
              <a href="#contact" onClick={() => setNavOpen(false)} className="hover:text-[#2E8B57] transition">Contact</a>
              <a href="#contact" onClick={() => setNavOpen(false)} className="mt-6 px-6 py-2 rounded-full bg-[#2E8B57] text-white font-bold shadow hover:bg-[#256d46] transition text-center text-base font-serif">Book Consultation</a>
            </nav>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/90 border-b border-[#E5E7EB] backdrop-blur flex items-center justify-between px-4 md:px-12 py-3">
        {/* Logo on the left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl font-bold text-[#1D2B53] tracking-tight font-serif">Sivia Law Firm</span>
        </div>
        {/* Nav links in the center (desktop) */}
        <nav className="hidden lg:flex gap-8 items-center text-[#2C2C2C] font-medium mx-auto font-serif">
          <a href="#" className="hover:text-[#2E8B57] transition">Home</a>
          <a href="#about" className="hover:text-[#2E8B57] transition">About</a>
          <a href="#services" className="hover:text-[#2E8B57] transition">Services</a>
          <a href="#testimonials" className="hover:text-[#2E8B57] transition">Testimonials</a>
          <a href="#contact" className="hover:text-[#2E8B57] transition">Contact</a>
        </nav>
        {/* CTA on the right (desktop) */}
        <div className="hidden lg:flex flex-shrink-0">
          <a href="#contact" className="px-5 py-2 rounded-full bg-[#2E8B57] text-white font-bold shadow hover:bg-[#256d46] transition font-serif">Book Consultation</a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setNavOpen((v) => !v)}
        >
          {navOpen ? <X className="w-7 h-7 text-[#1D2B53]" /> : <Menu className="w-7 h-7 text-[#1D2B53]" />}
        </button>
      </header>
      {mobileMenu}
    </>
  );
} 
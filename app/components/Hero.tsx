"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-0 md:px-0 py-0 bg-[#F8F6F3] border-b border-[#E5E7EB]">
      <div className="relative w-full h-72 md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image src="/calgary-skyline.jpg" alt="Hero Image" fill className="object-cover" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-12 flex flex-col items-center md:items-start justify-center h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight text-center md:text-left drop-shadow font-serif">Trusted Family & Real Estate Lawyers in Calgary</h1>
          {/* <p className="text-lg md:text-xl text-[#2C2C2C] mb-6 text-center md:text-left font-sans">Legal guidance you can count on—whether you're going through a divorce or buying a new home.</p> */}
          <a
            href="#contact"
            onClick={() => window.dispatchEvent(new Event("contact-highlight"))}
            className="inline-block px-8 py-3 rounded-full bg-[#2E8B57] text-white font-bold text-lg shadow hover:bg-[#256d46] transition font-serif"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
} 

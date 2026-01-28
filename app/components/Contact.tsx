"use client";

import { MessageCircle, MapPin, Clock } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const triggerHighlight = () => {
      setHighlight(true);
      window.setTimeout(() => setHighlight(false), 2200);
    };

    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        triggerHighlight();
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("contact-highlight", triggerHighlight as EventListener);

    if (window.location.hash === "#contact") {
      triggerHighlight();
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("contact-highlight", triggerHighlight as EventListener);
    };
  }, []);

  return (
    <section id="contact" className="px-4 md:px-12 py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-8 text-center font-serif">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Contact Details */}
        <div className="flex-[1.6] bg-[#F8F6F3] rounded-xl shadow p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-10 h-10 text-[#2E8B57]" />
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1D2B53] font-serif">Get in Touch</h3>
          </div>
          <p className="text-[#2C2C2C] text-lg mb-6 font-sans">
            We’re here to help with family law, real estate and notary services. Reach
            out to speak with our team.
          </p>
          <div className="space-y-4 text-lg">
            <p
              className={`text-[#2C2C2C] flex items-center gap-3 font-sans rounded-md px-2 py-1 transition ${
                highlight ? "bg-[#E7F6EE] ring-2 ring-[#2E8B57]/40" : ""
              }`}
            >
              <PhoneIcon className="w-5 h-5 text-[#1D2B53]" />
              <span className="font-medium text-[#1D2B53]">Phone:</span>
              <a href="tel:4034570121" className="text-[#1D2B53] font-semibold font-sans">
                (403) 457-0121
              </a>
            </p>
            <p
              className={`text-[#2C2C2C] flex items-center gap-3 font-sans rounded-md px-2 py-1 transition ${
                highlight ? "bg-[#E7F6EE] ring-2 ring-[#2E8B57]/40" : ""
              }`}
            >
              <MessageCircle className="w-5 h-5 text-[#1D2B53]" />
              <span className="font-medium text-[#1D2B53]">Email:</span>
              <a href="mailto:info@sivia-law.com" className="text-[#1D2B53] font-semibold font-sans">
                info@sivia-law.com
              </a>
            </p>
            <p className="text-[#2C2C2C] flex items-center gap-3 font-sans">
              <Clock className="w-5 h-5 text-[#1D2B53]" />
              <span className="font-medium text-[#1D2B53]">Hours:</span> Mon–Fri, 9am–5pm
            </p>
            <p className="text-[#2C2C2C] font-sans text-lg">
              <span className="font-medium text-[#1D2B53]">Address:</span> #206 7 Westwinds Cres NE, Calgary AB T3J 5H2
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 rounded-xl overflow-hidden shadow min-h-[240px] md:min-h-[320px]">
          {/* Google Map with exact address pin */}
          <iframe
            title="Sivia Law Firm Calgary Map"
            src="https://www.google.com/maps?q=%23206+7+Westwinds+Cres+NE,+Calgary+AB+T3J+5H2&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

// Lucide icon for phone (not imported by default)
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.28 1.6.47 2.36a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.76.19 1.55.34 2.36.47A2 2 0 0 1 21 16.91z"></path></svg>
  );
} 

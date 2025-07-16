import { MessageCircle, MapPin, Clock } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="px-4 md:px-12 py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-8 text-center font-serif">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <form className="flex-1 bg-[#F8F6F3] rounded-lg shadow p-6 space-y-4 font-sans">
          <div>
            <label className="block text-[#2C2C2C] font-medium mb-1 font-sans">Name</label>
            <input type="text" className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-[#2C2C2C] font-sans" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-[#2C2C2C] font-medium mb-1 font-sans">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-[#2C2C2C] font-sans" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-[#2C2C2C] font-medium mb-1 font-sans">Phone</label>
            <input type="tel" className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-[#2C2C2C] font-sans" placeholder="(403) 457-0121" />
          </div>
          <div>
            <label className="block text-[#2C2C2C] font-medium mb-1 font-sans">Legal Issue</label>
            <select className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-[#2C2C2C] font-sans">
              <option>Family Law</option>
              <option>Real Estate Law</option>
            </select>
          </div>
          <div>
            <label className="block text-[#2C2C2C] font-medium mb-1 font-sans">Message</label>
            <textarea className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#2E8B57] text-[#2C2C2C] font-sans" rows={4} placeholder="How can we help you?" />
          </div>
          <button type="submit" className="w-full px-6 py-3 rounded-full bg-[#2E8B57] text-white font-bold text-lg shadow hover:bg-[#256d46] transition font-serif">Send Message</button>
        </form>
        {/* Contact Details & Map */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-[#F8F6F3] rounded-lg shadow p-6 flex flex-col items-center">
            <MapPin className="w-8 h-8 text-[#2E8B57] mb-2" />
            <h3 className="text-lg font-semibold text-[#2E8B57] mb-2 font-serif">Contact Details</h3>
            <p className="text-[#2C2C2C] flex items-center gap-2 font-sans"><PhoneIcon className="w-4 h-4 text-[#1D2B53]" />Phone: <a href="tel:4034570121" className="text-[#1D2B53] font-medium font-sans">(403) 457-0121</a></p>
            <p className="text-[#2C2C2C] flex items-center gap-2 font-sans"><MessageCircle className="w-4 h-4 text-[#1D2B53]" />Email: <a href="mailto:info@sivia-law.com" className="text-[#1D2B53] font-medium font-sans">info@sivia-law.com</a></p>
            <p className="text-[#2C2C2C] flex items-center gap-2 font-sans"><Clock className="w-4 h-4 text-[#1D2B53]" />Hours: Mon–Fri, 9am–5pm</p>
            <p className="text-[#2C2C2C] font-sans">Address: #206 7 Westwinds Cres NE, Calgary AB T3J 5H2</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow aspect-video">
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
import { Users, Home, Globe, FileText, CheckCircle } from "lucide-react";

export default function PracticeAreas() {
  return (
    <section id="services" className="px-4 md:px-12 py-12 bg-[#F8F6F3] border-y border-[#E5E7EB]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-8 text-center font-serif">Practice Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Family Law */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#2E8B57]">
          <Users className="w-10 h-10 text-[#2E8B57] mb-4" />
          <h3 className="text-xl font-semibold text-[#1D2B53] mb-2 font-serif">Family Law</h3>
          <p className="text-[#2C2C2C] text-sm font-sans">As our area of focus, we provide clients with services for divorce, separation agreements, child custody and prenuptial agreements.</p>
        </div>
        {/* Real Estate Law */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#2E8B57]">
          <Home className="w-10 h-10 text-[#2E8B57] mb-4" />
          <h3 className="text-xl font-semibold text-[#1D2B53] mb-2 font-serif">Real Estate Law</h3>
          <p className="text-[#2C2C2C] text-sm mb-2 font-sans">Whether you are buying or selling residential or commercial property, we can provide expert real estate assistance. Our services include:</p>
          <ul className="space-y-2 w-full max-w-xs mx-auto text-left">
            <li className="flex items-start gap-2 text-[#2C2C2C] font-sans">
              <CheckCircle className="w-5 h-5 text-[#2E8B57] mt-0.5 flex-shrink-0" />
              <span>Residential and commercial real estate sale and purchase</span>
            </li>
            <li className="flex items-start gap-2 text-[#2C2C2C] font-sans">
              <CheckCircle className="w-5 h-5 text-[#2E8B57] mt-0.5 flex-shrink-0" />
              <span>Mortgages and refinancing</span>
            </li>
            <li className="flex items-start gap-2 text-[#2C2C2C] font-sans">
              <CheckCircle className="w-5 h-5 text-[#2E8B57] mt-0.5 flex-shrink-0" />
              <span>Reviewing Sale and Purchase Agreements</span>
            </li>
          </ul>
        </div>
        {/* Immigration Law */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#2E8B57]">
          <Globe className="w-10 h-10 text-[#2E8B57] mb-4" />
          <h3 className="text-xl font-semibold text-[#1D2B53] mb-2 font-serif">Immigration Law</h3>
          <p className="text-[#2C2C2C] text-sm font-sans">We provide assistance with permanent residency applications, family sponsorships (including Super Visa), and spousal sponsorships.</p>
        </div>
        {/* Notary Services */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#2E8B57]">
          <FileText className="w-10 h-10 text-[#2E8B57] mb-4" />
          <h3 className="text-xl font-semibold text-[#1D2B53] mb-2 font-serif">Notary Services</h3>
          <p className="text-[#2C2C2C] text-sm font-sans">We also provide quick and affordable notary services of all kinds, including attestations, permission for minors to travel, immigration letters, etc.</p>
        </div>
      </div>
    </section>
  );
} 
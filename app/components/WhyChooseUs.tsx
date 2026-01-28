import { Clock, MapPin, DollarSign, Star } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="px-4 md:px-12 py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-8 text-center font-serif">Why Choose Us</h2>
      <div className="md:hidden flex gap-4 overflow-x-auto pb-2">
        <div className="min-w-[200px] bg-[#F8F6F3] rounded-lg shadow px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-[#2E8B57]" />
          </div>
          <span className="font-semibold text-[#2C2C2C] text-sm font-sans">30+ Years Legal Experience</span>
        </div>
        <div className="min-w-[200px] bg-[#F8F6F3] rounded-lg shadow px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#2E8B57]" />
          </div>
          <span className="font-semibold text-[#2C2C2C] text-sm font-sans">Local Calgary Experts</span>
        </div>
        <div className="min-w-[200px] bg-[#F8F6F3] rounded-lg shadow px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-[#2E8B57]" />
          </div>
          <span className="font-semibold text-[#2C2C2C] text-sm font-sans">Transparent Pricing</span>
        </div>
        <div className="min-w-[200px] bg-[#F8F6F3] rounded-lg shadow px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center">
            <Star className="w-5 h-5 text-[#2E8B57]" />
          </div>
          <span className="font-semibold text-[#2C2C2C] text-sm font-sans">5-Star Client Satisfaction</span>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center mb-2">
            <Clock className="w-7 h-7 text-[#2E8B57]" />
          </div>
          <span className="font-semibold text-[#2C2C2C] font-sans">30+ Years Combined Legal Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center mb-2">
            <MapPin className="w-7 h-7 text-[#2E8B57]" />
          </div>
          <span className="font-semibold text-[#2C2C2C] font-sans">Local Calgary Experts</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center mb-2">
            <DollarSign className="w-7 h-7 text-[#2E8B57]" />
          </div>
          <span className="font-semibold text-[#2C2C2C] font-sans">Transparent Pricing</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center mb-2">
            <Star className="w-7 h-7 text-[#2E8B57]" />
          </div>
          <span className="font-semibold text-[#2C2C2C] font-sans">5-Star Client Satisfaction</span>
        </div>
      </div>
    </section>
  );
} 

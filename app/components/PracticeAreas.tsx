import { Building2, Home, Briefcase, Stamp } from "lucide-react";
import FamilyLaw, { familyLawCards } from "./FamilyLaw";

const realEstateCards = [
  {
    title: "Residential Real Estate",
    description: "Guidance for buying or selling a home, from offers to closing.",
    icon: Home,
  },
  {
    title: "Commercial Real Estate",
    description: "Support for commercial purchases, sales, and related agreements.",
    icon: Building2,
  },
  {
    title: "Business Law",
    description: "Practical advice for contracts, incorporations, and ongoing needs.",
    icon: Briefcase,
  },
  {
    title: "Notary Services",
    description: "Quick, reliable notarization for documents and sworn statements.",
    icon: Stamp,
  },
];

export default function PracticeAreas() {
  return (
    <section id="services" className="px-4 md:px-12 py-12 bg-[#F8F6F3] border-y border-[#E5E7EB]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-8 text-center font-serif">Practice Areas</h2>
      <FamilyLaw />
      <div className="md:hidden mb-12">
        <div className="space-y-3">
          {familyLawCards.map((card) => (
            <details key={card.title} className="bg-white rounded-lg shadow border border-[#E5E7EB]">
              <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-[#1D2B53] font-serif">
                {card.title}
              </summary>
              <div className="px-4 pb-4 text-sm text-[#2C2C2C] font-sans">{card.description}</div>
            </details>
          ))}
        </div>
      </div>
      <section>
        <h3 className="text-xl md:text-2xl font-bold text-[#1D2B53] mb-4 md:mb-6 text-center font-serif">Real Estate</h3>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {realEstateCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#2E8B57]"
            >
              <card.icon className="w-10 h-10 text-[#2E8B57] mb-4" />
              <h4 className="text-lg font-semibold text-[#1D2B53] mb-2 font-serif">{card.title}</h4>
              <p className="text-[#2C2C2C] text-sm font-sans">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <div className="space-y-3">
            {realEstateCards.map((card) => (
              <details key={card.title} className="bg-white rounded-lg shadow border border-[#E5E7EB]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-[#1D2B53] font-serif">
                  {card.title}
                </summary>
                <div className="px-4 pb-4 text-sm text-[#2C2C2C] font-sans">{card.description}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

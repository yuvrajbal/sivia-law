import { Handshake, Scale, Users, FileText } from "lucide-react";

export const familyLawCards = [
  {
    title: "Collaborative Family Divorce",
    description:
      "Everyone works together to reach mutually acceptable out-of-court agreements in the best interests of every family member.",
    icon: Handshake,
  },
  {
    title: "Family Mediation",
    description:
      "An affordable and timely approach that research shows can reduce conflict and preserve relationships where possible.",
    icon: Users,
  },
  {
    title: "Parenting and Custody",
    description:
      "We help with the most stressful issue after separation—parenting time and custody arrangements for children.",
    icon: Scale,
  },
  {
    title: "Agreements & Independent Legal Advice",
    description:
      "Guidance on separation, prenuptial, and cohabitation agreements, plus independent legal advice to protect all parties.",
    icon: FileText,
  },
];

export default function FamilyLaw() {
  return (
    <section className="mb-4 md:mb-12">
      <h3 className="text-xl md:text-2xl font-bold text-[#1D2B53] mb-4 md:mb-6 text-center font-serif">Family Law</h3>
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {familyLawCards.map((card) => (
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
    </section>
  );
}

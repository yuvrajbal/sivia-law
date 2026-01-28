import PricingTable from "./PricingTable";
import { familyLawTable, realEstateTablePreview } from "../data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 md:px-12 py-12 bg-[#F8F6F3] border-y border-[#E5E7EB]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-6 text-center font-serif">Pricing</h2>
      <div className="max-w-6xl mx-auto space-y-12">
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1D2B53] mb-4 font-serif">
            Family Law
          </h3>
          <p className="text-[#2C2C2C] text-lg mb-6 font-sans">
            We understand the value of knowing upfront what our legal services will cost. In most cases, we are able to
            offer flat rate legal fees for our family law services, giving you the peace of mind that the price you’re
            quoted is what you will pay. No surprises.
          </p>
          <PricingTable {...familyLawTable} />
        </section>

        <section>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1D2B53] mb-4 font-serif">Real Estate</h3>
          <PricingTable {...realEstateTablePreview} />
          <div className="mt-6 flex flex-col items-center gap-4 text-center">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0B2D4A] text-white font-semibold shadow hover:bg-[#08243a] transition"
            >
              View Full Real Estate Pricing
            </a>
            <p className="text-sm text-[#2C2C2C] font-sans max-w-3xl">
              *Our flat-rate fees are based on Land Titles Office registration costs of a mortgage at 80% loan to value.
              Lenders may obligate borrowers to have their mortgage registered at higher than 80% loan to value, in which
              case additional fees will apply.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

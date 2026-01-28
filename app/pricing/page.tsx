import Contact from "../components/Contact";
import Header from "../components/Header";
import PricingTable from "../components/PricingTable";
import { realEstateTableFull } from "../data/pricing";

const additionalCharges = [
  "Title insurance",
  "Condominium estoppel certificates",
  "More than two payouts on a refinance",
  "Updating or obtaining compliance on Real Property Reports",
  "Encroachment agreements",
  "Relaxation permits",
  "Rush fees (receiving documents within 72 hours of signing appointment)",
  "Assignment of rents on rental properties",
  "More than one mortgage registration",
  "More than one title on a property (such as a titled parking stall or titled condo storage unit)",
  "Mortgage registration at higher than 80% loan to value",
];

export default function PricingPage() {
  return (
    <main className="bg-[#F8F6F3] min-h-screen">
      <Header linkPrefix="/" />
      <section className="px-4 md:px-12 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D2B53] mb-6 font-serif">Real Estate Pricing</h1>
        <PricingTable {...realEstateTableFull} />
        <div className="mt-8 space-y-6 text-[#2C2C2C] font-sans">
          <p className="text-sm">
            *Our flat-rate fees are based on Land Titles Office registration costs of a mortgage at 80% loan to value.
            Lenders may obligate borrowers to have their mortgage registered at higher than 80% loan to value, in which
            case additional fees will apply.
          </p>
          <div>
            <p className="text-sm mb-3">
              Please note that our flat-rate fees do not include certain additional items, which are only applicable on
              some transactions. Examples of additional charges include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              {additionalCharges.map((charge) => (
                <li key={charge}>{charge}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}

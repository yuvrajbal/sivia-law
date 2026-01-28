import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-12 py-12 bg-white">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-4 font-serif">About Us</h2>
        <p className="text-[#2C2C2C] text-lg mb-4 font-sans">
          An internationally trained lawyer, Krishanjit Singh Sivia has over 30 years of legal experience, including as a
          public prosecutor in the Punjab & Haryana High Court, India. Now based in Calgary, Krishanjit serves clients in
          family law, immigration law, real estate law, wills and estate law, and provides notary services.
        </p>
        <p className="text-[#2C2C2C] text-lg mb-4 font-sans">
          Krishanjit is an active member of Legal Aid Alberta, and regularly provide legal services to Albertans in need.
        </p>
        <p className="text-[#2C2C2C] text-lg font-sans">Our office also provides services in Hindi, Punjabi and Urdu.</p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3] relative rounded-lg overflow-hidden shadow">
          <Image
            src="/about-us.jpg"
            alt="Sivia Law Firm Team Photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
} 

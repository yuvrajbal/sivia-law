export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 md:px-12 py-12 bg-[#F8F6F3] border-y border-[#E5E7EB]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-8 text-center font-serif">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <p className="text-[#2C2C2C] mb-4 font-sans">“Sivia Law Firm made a difficult time so much easier. Their compassion and expertise were invaluable.”</p>
          <span className="font-semibold text-[#2E8B57] font-sans">— Jane D., Teacher</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <p className="text-[#2C2C2C] mb-4 font-sans">“Professional, knowledgeable, and always available to answer my questions. Highly recommend!”</p>
          <span className="font-semibold text-[#2E8B57] font-sans">— Mark S., Engineer</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <p className="text-[#2C2C2C] mb-4 font-sans">“They handled my property purchase smoothly from start to finish. Thank you, Sivia Law!”</p>
          <span className="font-semibold text-[#2E8B57] font-sans">— Priya K., Entrepreneur</span>
        </div>
      </div>
    </section>
  );
} 
const testimonials = [
  {
    name: "gurnoor k",
    quote:
      "I had such an amazing experience with Sivia sir and Palak ma'am as she helped my husband and I with our home ownership and mortgage. Every time we would visit the office, we were greeted with such warm attitude and had genuine interaction.",
  },
  {
    name: "Lori Merrill",
    quote:
      "I was involved with Mr. Sivia, Nicole, and Palak in assisting a friend. I found them each to be efficient, personable, and compassionate. They did excellent work for her. Such a friendly office and it really was a pleasure working with them.",
  },
  {
    name: "Debra Larsen",
    quote:
      "They were so amazing and helped us get through all the process for buying our home. Very fast and very quick to respond to emails and more. I would recommend them 100 percent. Thank you guys for all your hard work.",
  },
  {
    name: "Sha Kishore",
    quote:
      "We have excellent service with Sivia law office. Multiple reasons: immigrations, family letters, personal, buying and selling of property, work and more.",
  },
  {
    name: "Raghav Srikanth",
    quote: "The Sivia law office provided a great experience for me throughout my legal journey.",
  },
  {
    name: "Anup Sinha",
    quote: "Awesome service. They went out of their way. Stayed after hours to assist us. Highly recommend.",
  },
  {
    name: "RM 00 (ROCKY)",
    quote:
      "This gentleman was awesome - very knowledgeable and quick on the process. Huge help and support you need when doing a big purchase.",
  },
  {
    name: "Mandeep Singh",
    quote:
      "Always prompt in responding and attends to issues without delay. I have recommended Mr. Sivia to all my clients and referrals.",
  },
  {
    name: "Isabelle Barbeau",
    quote: "He is super professional and I would hire him again without any doubt.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 md:px-12 py-12 bg-[#F8F6F3] border-y border-[#E5E7EB]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-8 text-center font-serif">Testimonials</h2>
      <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] bg-white rounded-lg shadow p-6 flex flex-col snap-start"
          >
            <p className="text-[#2C2C2C] mb-4 font-sans">“{testimonial.quote}”</p>
            <span className="font-semibold text-[#2E8B57] font-sans">— {testimonial.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import PracticeAreas from "./components/PracticeAreas";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-[#F8F6F3] min-h-screen flex flex-col">
      <Header />
      <div className="w-full  mx-auto flex-1">
        <Hero />
        <div className="max-w-7xl mx-auto">
        <PracticeAreas />
        <About />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        </div>
      </div>
      {/* <ChatWidget /> */}
    </main>
  );
}

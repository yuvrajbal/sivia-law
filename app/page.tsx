import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ChatWidget from "./components/ChatWidget";

export default function Home() {
  return (
    <main className="bg-[#F8F6F3] min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-7xl mx-auto flex-1">
        <Hero />
        <PracticeAreas />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </div>
      <ChatWidget />
    </main>
  );
}

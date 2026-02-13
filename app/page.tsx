import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Activities from "@/components/Activities";
import Members from "@/components/Members";
import News from "@/components/News";
import Sponsor from "@/components/Sponsor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Activities />
        <Members />
        <News />
        <Sponsor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

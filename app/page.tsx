
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeBand from "./components/MarqueeBand";
import HousesGrid from "./components/HousesGrid";
import KeyFigures from "./components/KeyFigures";
import PhilosophySection from "./components/PhilosophySection";
import NewsSection from "./components/NewsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Scroll-aware Navbar (handles its own fixed positioning) */}
      <Navbar />

      {/* Page sections */}
      <main>
        <HeroSection />
        <MarqueeBand />
        <HousesGrid />
        {/* <KeyFigures /> */}
        <PhilosophySection />
        <NewsSection />
        {/* <CTASection /> */}
      </main>

      <Footer />
    </>
  );
}

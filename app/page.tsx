
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeBand from "./components/MarqueeBand";
import HousesGrid from "./components/HousesGrid";
import PhilosophySection from "./components/PhilosophySection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Scroll-aware Navbar (handles its own fixed positioning) */}
      <Navbar />

      {/* Page sections */}
      <main role="main">
        <HeroSection />
        <MarqueeBand />
        <article id="houses-article">
          <HousesGrid />
        </article>
        {/* <KeyFigures /> */}
        <article id="philosophy-article">
          <PhilosophySection />
        </article>
        <article id="news-article">
          <NewsSection />
        </article>
        {/* <CTASection /> */}
      </main>

      <Footer />
    </>
  );
}


import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeBand from "./components/MarqueeBand";
import GroupOverview from "./components/GroupOverview";
import HousesGrid from "./components/HousesGrid";
import PhilosophySection from "./components/PhilosophySection";
import NewsSection from "./components/NewsSection";
import CommitmentsSection from "./components/CommitmentsSection";
import CareersSection from "./components/CareersSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Scroll-aware Navbar (handles its own fixed positioning) */}
      <Navbar theme="dark" />

      {/* Page sections */}
      <main role="main">
        <HeroSection />
        <MarqueeBand />
        <article id="group-overview-article">
          <GroupOverview />
        </article>
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

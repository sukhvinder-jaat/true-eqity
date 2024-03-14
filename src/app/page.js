import Buchen from "@/components/Buchen";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Immobilien from "@/components/Immobilien";
import Ocean from "@/components/Ocean";
import PreSeed from "@/components/PreSeed";
import ShortTime from "@/components/ShortTime";
import BackToTop from "@/components/common/BackToTop";

export default function Home() {
  return (
    <>
      <BackToTop />
      <Hero />
      <Ocean />
      <ShortTime />
      <PreSeed />
      <Immobilien />
      <Buchen />
      <Footer />
    </>
  );
}

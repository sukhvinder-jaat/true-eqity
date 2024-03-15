"use client";
import Buchen from "@/components/Buchen";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Immobilien from "@/components/Immobilien";
import Ocean from "@/components/Ocean";
import PreSeed from "@/components/PreSeed";
import ShortTime from "@/components/ShortTime";
import BackToTop from "@/components/common/BackToTop";
import PreLoader from "@/components/common/PreLoader";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  // FOR FULL SCREEN LOADING
  useEffect(() => {
    document.body.classList.add("not-scroll-before-loading");
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("not-scroll-before-loading");
    }, 3000);
  }, []);
  return (
    <>
      {loading && <PreLoader />}
      {loading === false && (
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
      )}
    </>
  );
}

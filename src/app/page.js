"use client"
import HeroBanner from "../../components/Hero/HeroBanner.jsx";
import Social from "../../components/Social/index.jsx";
import Services from "../../components/Services/Services.jsx";
import Heighlights from "../../components/Heighlights/Heighlights.jsx";
import WorkHistory from "../../components/WorkHistory/WorkHistory.jsx";
import Faq from "../../components/FAQ/index.jsx";
import Loader from "../../components/CommenElements/Loader.jsx";
import { useEffect, useState } from "react";
import { AnimatePresence, useTransform, useScroll, motion } from "framer-motion";
import Lenis from 'lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      // document.body.style.overflow = 'hidden';
      
    }, 2000);


    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    });
    gsap.ticker.lagSmoothing(0);

  }, []);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>
      <HeroBanner />
      <Social />
      <Services />
      <Heighlights />
      <WorkHistory />
      <Faq />
    </main>
  );
}

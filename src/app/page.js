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
import LightRays from "../../components/LightRays.jsx";

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
      <div className="w-full h-svh absolute top-0 left-0 z-[2]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <HeroBanner />
      <Social />
      <Services />
      <Heighlights />
      <WorkHistory />
      <Faq />
    </main>
  );
}

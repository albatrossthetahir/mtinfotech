"use client"
import HeroBanner from "../../components/Hero/HeroBanner.jsx";
import Social from "../../components/Social/index.jsx";
import Services from "../../components/Services/Services.jsx";
import Heighlights from "../../components/Heighlights/Heighlights.jsx";
import WorkHistory from "../../components/WorkHistory/WorkHistory.jsx";
import Faq from "../../components/FAQ/index.jsx";
import Loader from "../../components/CommenElements/Loader.jsx";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
    }, 2000);
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

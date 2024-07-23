import HeroBanner from "../../components/Hero/HeroBanner.jsx";
import Social from "../../components/Social/index.jsx";
import Services from "../../components/Services/Services.jsx";
import Heighlights from "../../components/Heighlights/Heighlights.jsx";
import WorkHistory from "../../components/WorkHistory/WorkHistory.jsx";
import Faq from "../../components/FAQ/index.jsx";


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Social />
      <Services/>
      <Heighlights  />
      <WorkHistory />
      <Faq />
    </main>
  );
}

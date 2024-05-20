
import Header from "../../components/Header/index.jsx";
import HeroBanner from "../../components/Hero/HeroBanner.jsx";
import Social from "../../components/Social/index.jsx";
import Services from "../../components/Services/Services.jsx";
import Heighlights from "../../components/Heighlights/Heighlights.jsx";
import WorkHistory from "../../components/WorkHistory/WorkHistory.jsx";
import Faq from "../../components/FAQ/index.jsx";
import Footer from "../../components/Footer/Footer.jsx";


export default function Home({id}) {
  return (
    <main>
      <Header optionalLink={'Contact Me'} id={'header'} />
      <HeroBanner />
      <Social />
      <Services/>
      <Heighlights  />
      <WorkHistory />
      <Faq />
      <Footer/>
    </main>
  );
}

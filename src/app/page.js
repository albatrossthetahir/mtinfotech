import Hero from "../../components/Hero/index.jsx";
import Header from "../../components/Header/index.jsx";
import Social from "../../components/Social/index.jsx";
import Services from "../../components/Services/index.jsx";
import Heightlihts from "../../components/Heighlights/index.jsx"
import Footer from "../../components/Footer/index.jsx"
import Faq from "../../components/FAQ/index.jsx";
import Workhistory from "../../components/WorkHistory/index.jsx";

export default function Home() {
  return (
    <main>
      <Header optionalLink={'Contact Me'} />
      <Hero/>
      <Social/>
      <Services/>
      <Heightlihts/>
      <Workhistory/>
      <Faq/>
      <Footer/>
    </main>
  );
}

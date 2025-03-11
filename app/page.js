import Footer from "./src/ComponentsReno/Footer";
import HomeSection from "./src/ComponentsReno/HomeSection";
import Localisation from "./src/ComponentsReno/Localisation";
import Navbar from "./src/ComponentsReno/Navbar";
import ShowCase from "./src/ComponentsReno/ShowCase";

export default function Home() {
  return (
    <div style={{fontFamily:'roboto'}}>
        <Navbar/>
        <HomeSection/>
        <ShowCase/>
        <Localisation/>
        <Footer/>
    </div>
  );
}

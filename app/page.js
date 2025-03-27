import Footer from "@/components/Accueil/Footer";
import HomeSection from "@/components/Accueil/HomeSection";
import Localisation from "@/components/Accueil/Localisation";
import Navbar from "@/components/Accueil/Navbar";
import Devis from "@/components/DevisClient/Devis";
import Gallery from "@/components/showCase/Gallery";
import ShowCase from "@/components/showCase/ShowCase";


export default function Home() {
  return (
    <>
        <Navbar/>
        <HomeSection/>
        <Gallery/>
        <Devis/>
        <Localisation/>
        <Footer/>
    </>
  );
}

import Footer from "@/components/Accueil/Footer";
import HomeSection from "@/components/Accueil/HomeSection";
import Localisation from "@/components/Accueil/Localisation";
import Navbar from "@/components/Accueil/Navbar";
import Gallery from "@/components/showCase/Gallery";
import ShowCase from "@/components/showCase/ShowCase";


export default function Home() {
  return (
    <>
        <Navbar/>
        <HomeSection/>
        <Gallery/>
        <Localisation/>
        <Footer/>
    </>
  );
}

import Footer from "@/components/Accueil/Footer";
import HomeSection from "@/components/Accueil/HomeSection";
import Localisation from "@/components/Accueil/Localisation";
import Navbar from "@/components/Accueil/Navbar";
import ShowCase from "@/components/Accueil/ShowCase";


export default function Home() {
  return (
    <>
        <Navbar/>
        <HomeSection/>
        <ShowCase/>
        <Localisation/>
        <Footer/>
    </>
  );
}

"use client"
import Footer from "@/components/Accueil/Footer";
import HomeSection from "@/components/Accueil/HomeSection";
import Localisation from "@/components/Localisation/Localisation";
import Navbar from "@/components/Accueil/Navbar";
import Comment from "@/components/Comments/Comment";
import Devis from "@/components/DevisClient/Devis";
import Gallery from "@/components/Gallery/Gallery";
import fetchLink from "@/functions/fetchLink";
import sanitizeMedias from "@/functions/sanitizeMedias";
import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css'


export default function Home() {
  const [plans, setPlans] = useState(undefined)
  const [medias, setMedias] = useState(undefined)
  const [comment, setComment] = useState([])

  useEffect(() => {
    axios({url:fetchLink('media/show'), method:'GET'})
    .then((value) => {
      const med = [...value.data]
      const plansMed = med.filter(elt => elt.category === 'Plans')
      const placoMed = med.filter(elt => elt.category === 'Placoplâtre')
      const decoMed = med.filter(elt => elt.category === 'Decoration')
      const peintureMed = med.filter(elt => elt.category === 'Peinture')
      setMedias([...placoMed, ...decoMed, ...peintureMed])
      setPlans(plansMed)
    })
    .catch((reason) => console.log('An error occured', reason))
  },[])
  
useEffect(() => {
  axios({method:'GET', url:fetchLink('comment')})
  .then(value =>{
      setComment(value.data)
  })
  .catch(err => console.error(err))
}, [])
  return (
    <div className=" overflow-x-hidden">
        <Navbar/>
        <HomeSection plans={plans}/>
        <Gallery medias={medias}/>
        <Devis/>
        <Comment comments={comment} setComments={setComment}/>
        <Localisation/>
        <Footer/>
    </div>
  );
}

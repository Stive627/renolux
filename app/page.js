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


export default function Home() {
  const [plans, setPlans] = useState(undefined)
  const [medias, setMedias] = useState(undefined)
  const [comment, setComment] = useState([])

  useEffect(() => {
    axios({url:fetchLink('media/show'), method:'GET'})
    .then((value) => {setMedias(sanitizeMedias(value.data))})
    .catch((reason) => console.log('An error occured', reason))
  },[])
  
  useEffect(() => {
    axios({method:'GET', url:fetchLink('media/plans'), headers:{"Content-Type":"application/json"}})
    .then(value =>{
        setPlans(value.data)
    })
    .catch(err => console.error(err))
}, [])
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
        <Comment comments={comment}/>
        <Localisation/>
        <Footer/>
    </div>
  );
}

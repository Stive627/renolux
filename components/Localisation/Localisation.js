import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Image from 'next/image';
import fetchLink from '@/functions/fetchLink';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useScreen from '@/hook/useScreen';

const LinkMedia = ({icon, socialNetwork, url, borderColor}) => {
    return(
        <Link href={url} passHref legacyBehavior   className=' p-2  w-full cursor-pointer rounded-lg items-center'>
            <div className=' flex flex-row gap-3 items-center px-3 py-2'>
                <span>{icon}</span>
                <p className=' text-slate-700'>Nous suivre sur {socialNetwork}</p>
            </div>
        </Link>
    )
}

const LinkPhone = () => (<div className=' flex flex-row gap-3  rounded-md px-3 py-2'><span><LocalPhoneIcon className=' text-slate-700' /></span><p className=' text-slate-700'>Nous Joindre par telephone</p></div>)

const SocialMedia = () =>{
    const data = [['Facebook','rgba(75, 77, 199, 1)', <FacebookIcon sx={{color:'rgba(75, 77, 199, 1)'}} key={0}/>, 'https://www.facebook.com/profile.php?id=100084170042632&mibextid=ZbWKwL'],
                  ['Instagram','black', <InstagramIcon className=' text-slate-700'  key={1}/>, 'https://www.instagram.com/renolux_cameroun?igsh=d2FrZjJmZG1yNTd6'],
                 ]
                  .map((elt, indx) => <LinkMedia key={indx} icon={elt[2]} borderColor={elt[1]}  url={elt[3]} socialNetwork={elt[0]}/>)
    const socialLinks = [...data, <LinkPhone key={8}/>]
    return(
        <div className=' col-span-1 flex flex-col gap-1 cursor-pointer'>
            {socialLinks}
        </div>
    )
}

function Localisation() {
    const large = useScreen()
  return (
    <div className={`px-2 py-3 ${large && 'grid grid-cols-3 gap-1 items-center'}`}>
        <SocialMedia/>
        <div className=' col-span-1 w-full h-full p-2 flex justify-center'>
            <Image width={150} height={150} className=' object-cover' src = {fetchLink('public/medias/happyClients.png')} alt='Clients satisfaits'/>
        </div>
        <div className=' col-span-1 flex items-center flex-col '>
            <p className=' text-center text-slate-700'>Avec plus de 15 projets réalisés nous mettons toujours nos clients en accord avec notre professionnalismeet notre dévouement </p>
            <br/>
            <button style={{color:'rgba(12, 140, 233, 1)'}} className=' cursor-pointer'>Parcourrir le catalogue <ArrowForwardIcon sx={{fontSize:24}}/> </button>
        </div>
    </div>
  )
}

export default Localisation
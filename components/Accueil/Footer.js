import Link from 'next/link'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useScreen from '@/hook/useScreen';

function Footer() {
    const date = new Date()
    const [email, setEmail] = useState('')
    const large = useScreen()
    const SingleLink = ({link}) =>(<Link href={link[0]}><div className=' flex flex-row gap-2 items-center'><ArrowForwardIosIcon/> <p>{link[1]}</p></div></Link>)
  return (
    <div style={{backgroundColor:'rgba(12, 140, 233, 1)'}}>
        <div className={`w-full  px-3 py-2 pr-8 items-center ${large && 'flex justify-between'}`}>
            <div className=' flex flex-col gap-3'>
                {[['#', 'Accueil'], ['#', 'Obtenir un devis'], ['#', ' Contact & jobs']].map((elt, indx) => <SingleLink key={indx} link={elt}/>)}
            </div>
            <div className={`flex flex-col gap-2 ${!large && 'mt-5'}`}>
                <p>Abonnez pour a notre newsletter.</p>
                <div className=' flex flex-row gap-3'>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className=' border border-black text-white  rounded-md px-1 outline-blue-800' placeholder='Entrez votre email'/>
                    <button className=' border bg-white h-9 px-5 rounded-md'>S&#39;abonner</button>
                </div>
            </div>
        </div>
        <p className=' text-white text-[18px] text-center'> @ {date.getFullYear()} All right reserved.</p>
    </div>   
  )
}

export default Footer
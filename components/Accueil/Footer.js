import Link from 'next/link'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useScreen from '@/hook/useScreen';


function Footer() {
    const date = new Date()
    const [email, setEmail] = useState('')
    const large = useScreen()
    const SingleLink = ({link}) =>(<Link href={link[0]}><div className=' flex flex-row gap-2 items-center'><ArrowForwardIosIcon className=' text-slate-800'/> <p className=' '>{link[1]}</p></div></Link>)
  return (
    <div style={{backgroundColor:'rgba(12, 140, 233, 1)'}}>
        <div className={`w-full  px-3 py-2 pr-8 items-center ${large && 'flex justify-between'}`}>
            <div className=' flex flex-col gap-3'>
                {[['#', 'Accueil'], ['#', 'Obtenir un devis'], ['#', ' Contact & jobs']].map((elt, indx) => <SingleLink key={indx} link={elt}/>)}
            </div>
            <div className={`flex flex-col gap-2 ${!large && 'mt-5'}`}>
                <p className=' text-slate-900'>Abonnez pour a notre newsletter.</p>
                <div className=' flex flex-row gap-1 w-full'>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className=' border border-blue-800 bg-white   text-black  h-9 rounded-sm px-1 outline-blue-800' placeholder='Entrez votre email'/>
                    <button className='  bg-blue-600 border border-blue-700 text-white h-9 px-2 rounded-md '>S&#39;abonner</button>
                </div>
            </div>
        </div>
        <p className=' text-white text-[18px] text-center'> @ {date.getFullYear()} All right reserved.</p>
    </div>   
  )
}

export default Footer
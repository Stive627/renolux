import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import useScreen from '../../hook/useScreen';
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css'
import fetchLink from '@/functions/fetchLink';
import Image from 'next/image';
import Link from 'next/link';



export function LeftNav(){
    const large = useScreen()
    return(
        <div className = 'flex flex-row items-center gap-2'>
            <div><Image width={large?50:40} height={large?50:40}  alt={'Logo Renolux'} src={fetchLink('public/medias/logo.png')} className='logoAn'/></div>
            <p style={{color:'rgba(57, 55, 55, 1)'}} className={`font-semibold  ${large? 'text-[26px]':'text-[20px]'}`}>Renolux Cameroun</p>
        </div>
    )
}

const links = [{title:'Catalogue', link:'#catalogue'}, {title:'Obtenir un devis', link:'#devis'}, {title:'Contact & localisation', link:'#contact'}]


function RightSmall(){
    const [show, setShow] = useState(false)
    return(
        <>
            <button onClick={()=> setShow(!show)} className=' p-2 border-x-gray-300'>{ show ? <CloseIcon className=' w-5 h-6'/> : <MenuIcon className=' w-5 h-6'/>}</button>
            <div className={` absolute top-12 bottom-0 left-0 right-0 h-screen w-screen   bg-white overflow-y-hidden ${!show && 'hidden'} block`}>
                        <div className='  w-full flex'>
                            <div className=' flex flex-col justify-center  w-full divide-y divide-gray-300 gap-3'>
                                {links.map((elt, indx) =><button key={indx} onClick={() => setShow(false)}><Link key={indx} href={elt.link} className = 'no-underline navhov'>{elt.title}</Link></button>)}
                            </div>
                        </div>
            </div>
        </>
    )
}

const RightLarge = () => {
    return(<div className='flex flex-row items-center gap-4'>{links.map((elt, indx) => <Link key={indx} href={elt.link} className = 'navhov no-underline text-[18px]'>{elt.title}</Link>)}</div>)  
}

function Navbar() { 
    const large = useScreen()
    const [visible, setVisible] = useState(false)
    const handleVisible = () => {
        if(window.scrollY > 0){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleVisible)
        return () => window.removeEventListener('scroll', handleVisible)
    }, [])
  return (
        <div className=' fixed w-screen bg-white z-40 top-0'>
            <div className = 'flex justify-between px-2 py-2'>
                <LeftNav/>
                { large? <RightLarge/>:<RightSmall/>}
            </div>
            {visible && <hr className=' text-slate-300'/>}
        </div>
  )
}

export default Navbar
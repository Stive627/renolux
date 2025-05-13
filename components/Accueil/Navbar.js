import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import useScreen from '../../hook/useScreen';
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css'
import fetchLink from '@/functions/fetchLink';
import Image from 'next/image';
import handleNavigate from '@/functions/handleNavigate';
import PhoneIcon from '@mui/icons-material/Phone';

function highlightNav(elt){
    if(typeof window !== 'undefined'){
        const y = window.scrollY
        if((y >= 0 && y<=800) && elt === links[0]){
            return true
        }
        else if((y > 800 && y<=1200) && elt === links[1]){
            return true
        }
        else if((y > 1200 && y<=1300) && elt === links[2]){
            return true
        }
        else if(y > 1300 && elt === links[3]){
            return true
        }
    }
}
export function LeftNav(){
    const large = useScreen()
    return(
        <div className = 'flex flex-row items-center gap-2'>
            <div><Image width={large?50:40} height={large?50:40}  alt={'Logo Renolux'} src={'https://renolux-bucket.s3.ap-south-1.amazonaws.com/logo.png'} className='logoAn'/></div>
            <p style={{color:'rgba(57, 55, 55, 1)'}} className={`font-semibold  ${large? 'text-[26px]':'text-[20px]'}`}>Renolux Cameroun</p>
        </div>
    )
}

const links = ['Accueil','Catalogue', 'Obtenir un devis','Contact & localisation']


function RightSmall(){
    const [show, setShow] = useState(false)

    return(
        <>
            <button onClick={()=> setShow(!show)} className=' p-2 border-x-gray-300'>{ show ? <CloseIcon className=' w-5 h-6'/> : <MenuIcon className=' w-5 h-6'/>}</button>
            <div className={` absolute top-12 bottom-0 left-0 right-0 h-screen w-screen   bg-white overflow-y-hidden ${!show && 'hidden'} block`}>
                <div className='  w-full flex'>
                    <div className=' flex flex-col justify-center  w-full divide-y divide-gray-300 gap-3'>
                        {links.map((elt, indx) =><button key={indx} onClick={() =>{handleNavigate(elt) ;setShow(false)}}>{elt}</button>)}
                    </div>
                </div>
            </div>
        </>
    )
}

const RightLarge = () => {
    return(<div className='flex flex-row items-center gap-4'>{links.map((elt, indx) => <button onClick={()=>handleNavigate(elt)} key={indx} className = {`navhov cursor-pointer text-[18px] ${highlightNav(elt) && 'text-blue-800'}`}>{elt}</button>)}</div>)  
}

function Navbar() { 
    const large = useScreen()
    const contactRef = useRef()
    const [visible, setVisible] = useState(0)
    const handleVisible = () => {
        const vis = Math.floor((window.scrollY/(document.body.clientHeight - window.innerHeight))*100)
        if(vis>0){ 
            contactRef.current.style.height = '50px'
            }
        else{
            contactRef.current.style.height = '0px'
        }
        setVisible(vis)
    }
    useEffect(()=>{
        
        window.addEventListener('scroll', handleVisible)
        return () => window.removeEventListener('scroll', handleVisible)
    }, [visible])
  return (
        <div className=' fixed w-screen bg-white z-40 top-0'>
            <div className = 'flex justify-between px-2 py-2'>
                <LeftNav/>
                { large? <RightLarge/>:<RightSmall/>}
            </div>
            {visible>0 && <hr style={{width:`${visible}%`}} className=' text-blue-400'/>}
            <div ref={contactRef} className='  border border-gray-200 w-screen contact  '>
                <div className='py-1 px-2 w-full h-full flex items-center justify-between'>
                    <div className=' flex flex-row items-center gap-3'>
                        <PhoneIcon/>
                        <p>+237 6 91 09 80 37</p>
                    </div>
                    <button className={`cursor-pointer w-40 ${large && 'mr-8'} bg-black text-white rounded-lg py-0.5  relative`}>
                        <p>Rejoindre</p>
                        <div className=' w-5 h-5  absolute -top-2 rounded-full  -right-1  subscribe'></div>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Navbar
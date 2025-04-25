import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useScreen from '@/hook/useScreen';
import handleNavigate from '@/functions/handleNavigate';
import '../../App.css'


function Footer() {
    const date = new Date()
    const large = useScreen()
    const SingleLink = ({elt}) =>(<button onClick={()=>handleNavigate(elt)}><div className=' flex flex-row gap-2 items-center'><ArrowForwardIosIcon className=' text-slate-800 hover:text-white cursor-pointer'/> <p>{elt}</p></div></button>)
  return (
    <div style={{backgroundColor:'rgba(12, 140, 233, 1)'}}>
        <div className={`w-full  py-2  items-center ${large && 'flex justify-between px-4'}`}>
            <div className=' flex flex-col gap-3 '>
                {['Accueil', 'Obtenir un devis', 'Contact & jobs'].map((elt, indx) => <SingleLink key={indx} elt={elt}/>)}
            </div>
            <div className={`flex flex-col w-96 gap-2 justify-center ${!large && 'mt-5'}`}>
                <p className=' text-slate-900 text-center'>Rejoignez notre groupe WhatsApp pour rester informé de nos dernières offres et découvrir une large gamme de services pour tous vos travaux de rénovation </p>
                <div className=' flex justify-center'>
                    <button className='  cursor-pointer w-1/2 bg-black text-white rounded-lg py-0.5  relative'>
                        <p>Rejoindre</p>
                        <div className=' w-5 h-5  absolute -top-2 rounded-full  -right-1  subscribe'></div>
                    </button>
                </div>
            </div>
        </div>
        <p className={`text-white ${large? 'text-[18px]':'text-[15 px]'} text-center`}> @ {date.getFullYear()} All right reserved.</p>
    </div>   
  )
}

export default Footer
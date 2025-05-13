import React from 'react'
import useScreen from '../../hook/useScreen'
import Image from 'next/image'
import fetchLink from '@/functions/fetchLink'
import Typewriter from '../Typewriter'

const Plans = ({plans}) => {
    const large = useScreen()
    if(plans === undefined ) return <div className=' flex justify-center items-center h-1/2'> <div className=' border-2 border-blue-500 w-10 h-10 animate-spin rounded-full border-b-white'></div></div>
    return(
        <div className={`flex w-full ${large? 'justify-end':'justify-center'}`}>
            <div className={`border border-gray-200 p-2 rounded-sm flex flex-col gap-1 overflow-hidden ${large ? 'w-[75vh] h-[60vh]' :' h-[50vh]' }`}>
                <div className='flex flex-col gap-1 scrollVertical '>
                    {plans?.map((elt, indx) => <Image key={indx} src={fetchLink(elt.url)} className={'  w-full h-full rounded-sm'} alt={`plan de placo n0${indx}`} width={300} height={300}/>)}
                </div> 
            </div>            
        </div>
    )     
}

function HomeSectionRight({plans}){ 
    const large = useScreen()
    return(
        <div className = ' ml-1 col-span-4'>
            <div>
                <span className={` ${large ? 'text-[55px]' : 'text-[35px]'} `}>Nous sommes recommandés pour:</span>{large &&<br/>}
            </div>
            <div className=' flex justify-start pb-2'>
                <div className=' rounded-sm lineargradtext '><Typewriter arr={['Des solutions innovantes', 'Un service de qualité', 'le  respect des delais', 'Une approche orientée client.']} className={`${large?' text-[40px]' : ' text-[25px]'} font-bold`} ms={100}/></div>
            </div>
            <Plans plans={plans}/>
        </div>
    )
}

function HomeSection({plans}){
    const large = useScreen()
    return(
        <div className={`${large?'mt-20':'mt-14 '}`}>
        {
            large ? 
            <div className='grid grid-cols-7 '>
                 <div className=' col-span-3'> <Image height={100} width={100} alt='' className=' w-[84vh] h-[84vh]' src={'https://renolux-bucket.s3.ap-south-1.amazonaws.com/homepic.png'}/></div>
                <HomeSectionRight plans={plans}/>
            </div>
            :
            <>
                <Image width={100} height={100} alt='' className=' h-full w-full' src={'https://renolux-bucket.s3.ap-south-1.amazonaws.com/homepic.png'}/>
                <HomeSectionRight plans={plans}/>
            </>
        }</div>
    )
    }


export default HomeSection
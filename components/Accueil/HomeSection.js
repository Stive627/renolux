'use client'
import React, { useEffect, useState } from 'react'
import { fetchLink, Timg, TypeWriterArr } from '../../app/src/Ttools'
import useScreen from '../../hook/useScreen'
import axios from 'axios'
import Image from 'next/image'

const Plans = () => {
    const [plans, setPlans] = useState(undefined)
    const large = useScreen()
    useEffect(() => {
        axios({method:'GET', url:fetchLink('media/plans'), headers:{"Content-Type":"application/json"}})
        .then(value =>{
            setPlans(value.data)
        })
        .catch(err => console.error(err))
    }, [])

    if(plans === undefined ) return <div className=' flex justify-center items-center h-1/2'> <div className=' border-2 border-blue-500 w-10 h-10 animate-spin rounded-full border-b-white'></div></div>
    if(plans.length === 0) return <div><p className=' text-center text-[21px]'>No plans</p></div>
    return(
        <div className={`flex w-full ${large? 'justify-end':'justify-center'}`}>
            <div className={`border border-gray-200 p-2 rounded-sm flex flex-col gap-1 overflow-hidden ${large ? 'w-[75vh] h-[60vh]' :' h-[50vh]' }`}>
                <div className='flex flex-col gap-1 scrollVertical '>
                    {plans.map((elt, indx) => <Image key={indx} src={fetchLink('public/plans/'+elt)} className={'  w-full h-full rounded-sm'} alt={`plan de placo n0${indx}`} width={300} height={300}/>)}
                </div> 
            </div>            
        </div>
    )
        
}

function HomeSectionRight(){
    const large = useScreen()
    return(
        <div className = ' ml-1 col-span-4'>
            <div className=''>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ${large ? 'text-[55px]' : 'text-[35px]'} `}>Nous sommes </span>{large &&<br/>}
                <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500  ${large ? 'text-[55px]' : 'text-[35px]'}`}>recommandés pour</span>
            </div>
            <div className=' flex justify-start pb-2'>
                <div className=' border border-blue  bg-gradient-to-r  from-blue-500 to bg-green-500'><TypeWriterArr arr={['Des solutions innovantes', 'Un service de qualité', 'le  respect des delais', 'Une approche orientée client.']} className={`${large?' text-[40px]' : ' text-[25px]'} font-bold text-white`} ms={100}/></div>
            </div>
            <Plans/>
        </div>
    )
}

function HomeSection(){
    const large = useScreen()
    if(!large){
        return(
            <div>
                <Image width={100} height={100} alt='' className=' h-full w-full' src={fetchLink('public/medias/homepic.png')}/>
                <HomeSectionRight/>
            </div>
        )
    }
  return (
    <div className='grid grid-cols-7'>
        <div className=' col-span-3'> <Image height={100} width={100} alt='' className=' w-[84vh] h-[84vh]' src={fetchLink('public/medias/homepic.png')}/></div>
        <HomeSectionRight/>
    </div>
  )
}

export default HomeSection
import React, { useState } from 'react'
import SelectionnerTache from '../DevisClient/SelectionnerTache'
import ImageIcon from '@mui/icons-material/Image';
import useScreen from '@/hook/useScreen';
import Image from 'next/image';
import axios from 'axios';
import fetchLink from '@/functions/fetchLink';
import CloseIcon from '@mui/icons-material/Close';

function FormAdd({handleCloseForm, setMedias, medias}) {
    const [media, setMedia] = useState({category:'', img:undefined})
    const large = useScreen()
    const validMedia = media.category && media.img
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('img', media.img[0])
        formData.append('category', media.category)
        axios({url:fetchLink('media/add'), method:'POST', data:formData})
        .then((val) => {setMedias([val.data, ...medias]); console.log(val.data); handleCloseForm()})
        .catch((err) => console.log(err))
    }
    console.log(media.img)
    const handleDeleteImg = (indx) => {
        const actualImgArr = [...media.img]
        const finalArr = actualImgArr.filter((val, index) => index !== indx)
        setMedia({...media, img:finalArr})
    }
  return(
    <div className=' flex justify-center col-span-10'>
        <form  onSubmit={handleSubmit} className={`${large ? 'w-96':'w-4/5 mt-6'} flex flex-col gap-3`}>
            <p className=' font-semibold text-[19px]'>Ajouter un media</p>
            <SelectionnerTache visibilityOfPlan={true} task={media.category} handleChange={(e)=> setMedia({...media, category:e.target.value})}/>
            <>
                { 
                media.img?.length > 0 ? <div className=' flex flex-col gap-2'>   
                                            {media.img.map((elt, indx) =>
                                            <div key={indx} className=' relative'>
                                                <div className=' absolute right-1 top-1'><button type='button' onClick={()=>{handleDeleteImg(indx)}}><CloseIcon/></button></div>
                                                <Image key={indx} alt='the image' src={URL.createObjectURL(elt)} width={428} height={428}/>
                                            </div>)}
                                        </div>
                            :    
                            <>
                                <input type='file' className=' hidden' id='mediaImg' onChange={(e)=>{ console.log(Object.values(e.target.files)); setMedia({...media, img:Object.values(e.target.files)})}} multiple/>
                                <label htmlFor='mediaImg'>
                                    <div className=' w-full h-32 border border-dashed flex justify-center items-center rounded-md border-slate-500'>
                                        <ImageIcon className=' text-black' sx={{fontSize:30}}/>
                                    </div>
                                </label>
                            </>
                }
            </>
            <div className=' flex justify-between w-full gap-3'>
                <button onClick={handleCloseForm} type='submit' className={` rounded-md py-2 w-full bg-slate-800 text-white `}>Annuler</button>
                <button disabled={!validMedia} type='submit' className={` rounded-md py-2 w-full ${validMedia?'bg-blue-700 text-white':'bg-slate-300'}`}>Ajouter</button>
            </div>
        </form>
    </div>
  )
}

export default FormAdd

import React, { useState } from 'react'
import SelectionnerTache from '../DevisClient/SelectionnerTache'
import ImageIcon from '@mui/icons-material/Image';
import useScreen from '@/hook/useScreen';
import Image from 'next/image';
import axios from 'axios';
import fetchLink from '@/functions/fetchLink';

function FormAdd() {
    const [media, setMedia] = useState({category:'', img:undefined})
    const large = useScreen()
    const validMedia = media.category && media.img
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('url', media.img)
        formData.append('category', media.category)
        axios({url:fetchLink('media/add'), method:'POST ', data:formData})
        .then((val) => console.log(val.data))
        .catch((err) => console.log(err.response.data))
    }
  return(
    <div className=' flex justify-center'>
        <form  onSubmit={handleSubmit} className={`${large ? 'w-1/5':'w-4/5 mt-6'} flex flex-col gap-3`}>
            <p className=' font-semibold text-[19px]'>Ajouter un media</p>
            <SelectionnerTache task={media.category} handleChange={(e)=> setMedia({...media, category:e.target.value})}/>
            <>
                { 
                media.img ? <>   
                            <Image alt='the image' src={URL.createObjectURL(media.img[0])} width={428} height={428}/>
                            <button></button>
                            </>
                            :    
                            <>
                                <input id='mediaImg' className=' hidden' type='file' onChange={(e)=>setMedia({...media, img:e.target.files})}/>
                                <label htmlFor='mediaImg'>
                                    <div className=' w-full h-32 border border-dashed flex justify-center items-center rounded-md border-slate-500'>
                                        <ImageIcon className=' text-black' sx={{fontSize:30}}/>
                                    </div>
                                </label>
                            </>
                }
            </>
            <div className=' flex justify-between w-full gap-3'>
                <button type='submit' className={` rounded-md py-2 w-full bg-slate-800 text-white `}>Annuler</button>
                <button type='submit' className={` rounded-md py-2 w-full ${validMedia?'bg-blue-700 text-white':'bg-slate-300'}`}>Ajouter</button>
            </div>
        </form>
    </div>
  )
}

export default FormAdd

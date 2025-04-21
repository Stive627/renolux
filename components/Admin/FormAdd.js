import React, { useState } from 'react'
import SelectionnerTache from '../DevisClient/SelectionnerTache'
import ImageIcon from '@mui/icons-material/Image';
import useScreen from '@/hook/useScreen';

function FormAdd() {
    const [media, setMedia] = useState({category:'', img:undefined})
    const large = useScreen()
  return (
    <div className=' flex justify-center'>
        <form  onSubmit={(e)=>e.preventDefault()} className={`${large ? 'w-1/5':'w-4/5 mt-6'} flex flex-col gap-3`}>
            <p className=' font-semibold text-[19px]'>Ajouter un media</p>
            <SelectionnerTache task={media.category} handleChange={(e)=> setMedia({...media, category:e.target.value})}/>
            <input id='mediaImg' className=' hidden' type='file' onChange={(e)=>setMedia({...media, img:e.target.files})}/>
            <label htmlFor='mediaImg'>
                <div className=' w-full h-32 border border-dashed flex justify-center items-center rounded-md border-slate-500'>
                    <ImageIcon className=' text-black' sx={{fontSize:30}}/>
                </div>
            </label>
            <div className=' flex justify-between w-full gap-3'>
            <button type='submit' className={` rounded-md py-2 w-full bg-black text-white `}>Annuler</button>
            <button type='submit' className={` rounded-md py-2 w-full ${media.img?'bg-slate-700 text-white':'bg-slate-300'}`}>Ajouter</button>
            </div>
        </form>
    </div>
  )
}

export default FormAdd

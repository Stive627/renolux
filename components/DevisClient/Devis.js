import React, { useState } from 'react'
import '../../App.css'
import SelectionnerTache from './SelectionnerTache'
import useScreen from '@/hook/useScreen'
function Devis() {
  const large = useScreen()
  const [area, setArea] = useState('')
  const [tasks, setTask] = useState(undefined)
  const valideDevis = area 
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
  }
  return (
    <div className={` bg-slate-200 pt-3 ${large && 'h-40'} items-center`}>
      <p className='text-center text-slate-700'>Generer le devis de vos travaux juste en deux clics</p>
      <div className=' w-full flex justify-center items-center'>
        <form onSubmit={handleSubmit} className={`w-2/3 flex justify-between py-3 gap-2.5 ${!large && 'flex-col'}`}>
          <SelectionnerTache task={tasks} setTask={setTask}/>
          {(large || (!large && tasks)) && <input className={`border border-slate-400 rounded-md outline-none px-2 w-full h-12 ${!large && 'text-center'}`} placeholder='Entrez la superficie' type={large? 'text':'number'} value={area} onChange={(e)=> setArea(/\d*/.exec(e.target.value)[0])}/>}
          {(large || (!large && area)) && <button type='submit' style={{backgroundColor:valideDevis? 'rgba(12, 140, 233, 1)':'rgba(245, 245, 245, 1)'}} className=' w-full border rounded-md text-[18px] text-white h-12'>Generer</button>}
        </form>
      </div>
    </div>
  )
}

export default Devis

import React, { useState } from 'react'
import '../../App.css'
import SelectionnerTache from './SelectionnerTache'
import useScreen from '@/hook/useScreen'
import useWriter from '@/hook/useWriter'
import ClientDevis from './ClientDevis'
function Devis() {
  const large = useScreen()
  const [area, setArea] = useState('')
  const [tasks, setTask] = useState('')
  const [show, setShow] = useState(false)
  
  const valideDevis = tasks && tasks !== 'Selectionnez une tâche' 
  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true)
  }

  return (
    <div className={` bg-slate-200 pt-3 ${large && ''} items-center`}>
      <p className='text-center text-slate-700'>Generer le devis de vos travaux juste en deux clics</p>
      <div className=' w-full flex justify-center items-center'>
        <form onSubmit={handleSubmit} className={`w-2/3 flex justify-between py-3 gap-2.5 ${!large && 'flex-col'}`}>
          <SelectionnerTache task={tasks} handleChange={(e)=>{setShow(false); setTask(e.target.value)}}/>
          <input className={`border border-slate-400 rounded-md outline-none px-2 w-full h-12 ${!large && 'text-center'}`} placeholder='Entrez la superficie(optional)  ' type={large? 'text':'number'} value={area} onChange={(e)=> {setShow(false);setArea(/\d*/.exec(e.target.value)[0])}}/>
          <button type='submit' style={{backgroundColor:valideDevis? 'rgba(12, 140, 233, 1)':'rgba(186, 185, 185, 1)'}} className=' w-full border rounded-md text-[18px] text-white h-12'>Generer</button>
        </form>
      </div>
      {show && <ClientDevis title={tasks}/>}
    </div>
  )
}

export default Devis

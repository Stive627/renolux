import React, { useState } from 'react'
import '../../App.css'
import SelectionnerTache from './SelectionnerTache'
import useScreen from '@/hook/useScreen'
function Devis() {
  const large = useScreen()
  const [area, setArea] = useState('')
  const [tasks, setTask] = useState(undefined)
  const valideDevis = area && tasks
  const handleSubmit = (e) => {
    e.preventDefault()
    if(typeof window !== 'undefined'){
      window.scrollTo({top:100, behavior:'smooth'})
    }
  }
  return (
    <div className={`lineargrad w-full flex justify-center ${large && 'h-40'} items-center`}>
      <form onSubmit={handleSubmit} className={`w-2/3 flex justify-between py-3 gap-2.5 ${!large && 'flex-col'}`}>
        <SelectionnerTache task={tasks} setTask={setTask}/>
        {(large || (!large && tasks)) && <input className={`border border-slate-400 rounded-md outline-none px-2 w-full h-12 ${!large && 'text-center'}`} placeholder='Entrez la superficie' type={large? 'text':'number'} value={area} onChange={(e)=> setArea(/\d*/.exec(e.target.value)[0])}/>}
        {(large || (!large && area)) && <button type='submit' style={{backgroundColor:valideDevis? 'rgba(59, 136, 219, 1)':'rgba(245, 245, 245, 1)'}} className=' w-full border rounded-md text-[18px] text-white h-12'>Generer</button>}
      </form>
    </div>
  )
}

export default Devis

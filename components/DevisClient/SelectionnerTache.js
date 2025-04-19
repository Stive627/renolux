import React from 'react'

function SelectionnerTache({task, setTask}) {
  return (
    <select defaultValue={'tache'} className='w-full border  border-slate-400 text-center rounded-md h-12 outline-none' value={task} onChange={(e)=>setTask(e.target.value)}>
      <option >Placoplatre</option>
      <option>Decoration</option>
      <option>Peinture</option>
    </select>
    
  )
}

export default SelectionnerTache

import React from 'react'

function SelectionnerTache({task, handleChange}) {
  return (
    <select defaultValue='Selectionnez une tâche' name='task' className='w-full border  border-slate-400 text-center rounded-md h-12 outline-none' onChange={handleChange}>
      <option value='Placoplatre'>Placoplatre</option>
      <option value='Decoration'>Decoration</option>
      <option value='Peinture'>Peinture</option>
      <option value='Selectionnez une tâche'>Selectionnez une tâche</option>
    </select>
    
  )
}

export default SelectionnerTache

import React, { useState } from 'react'

function SelectionnerTache() {
    const [show, setShow] = useState(false)
  return (
    <div className=' border relative w-full' style={{color:'rgba(95, 99, 104, 1)'}}>
        <button onClick={()=>setShow(!show)}>Selectionner la tache</button>
{show && <div className='flex flex-col divide-x absolute'>
            {['Placoplatre', 'Peinture', 'Decoration'].map((elt, indx) => <button key={indx} className='w-full'>{elt}</button>)}
        </div>}
      
    </div>
  )
}

export default SelectionnerTache

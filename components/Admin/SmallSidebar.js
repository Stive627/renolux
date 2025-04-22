import React from 'react'
import '../../App.css'

function SmallSidebar({sidenavRef, closeNav, handleClickSmallNav, currIndx}) {
  return (
    <div onClick={closeNav}  ref={sidenavRef} className='sidenav'>
    <hr className=' text-gray-300'/>
    <div onClick={(e)=>e.stopPropagation()} style={{width:'70%', backgroundColor:'white', height:'100%'}}>
        <div className=' flex flex-col gap-4 pt-4 pl-5'>
        {['Home', 'Comment', 'Gallery'].map((elt, indx) => <p className={`${indx === currIndx && 'underline font-semibold'}`}  onClick={()=>handleClickSmallNav(indx)} key={indx}>{elt}</p>)}
        </div>
    </div>
    </div>
  )
}

export default SmallSidebar

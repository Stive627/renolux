import useScreen from '@/hook/useScreen'
import React from 'react'

function Square({val, setValue, indx, currIndx, setCurrIndx}) {
    const large = useScreen()
  return (
    <>
      {currIndx !== indx && <input onFocus={()=> setCurrIndx(indx)} autoFocus={indx === currIndx} type={large? 'text':'number'} value={val ?? ''}  placeholder='' onChange={(e) => setValue(indx, e.target.value[0])} className={`outline-red-600 border ${large? 'w-13 h-13':'w-11 h-11'} rounded-md  p-4 `} style={{borderColor:'rgba(115, 115, 115, 1)'}}/>}    
      {currIndx === indx && <input onFocus={()=>setCurrIndx(indx)} autoFocus={indx === currIndx} type={large? 'text':'number'} value={val ?? ''}  placeholder='' onChange={(e) => setValue(indx, e.target.value[0])} className={`outline-red-600 border ${large? 'w-13 h-13':'w-11 h-11'} rounded-md  p-4 `} style={{borderColor:'rgba(115, 115, 115, 1)'}}/>}    
    </>

  )
}

export default Square
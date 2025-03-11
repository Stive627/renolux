import React, { useState } from 'react'
import useScreen from '../hook/useScreen'
import Square from '../VerificationCode/Square'

function CodeVerification({handleCode}) {
    const large = useScreen()
    const [localcode, setLocalcode] = useState(['','','','','',''])
    const [i, setI] = useState(-1)
    function handleChange(value, index){
        localcode[index] = value
        setLocalcode(localcode)
        if(i === -1){ 
        setI(i + 2)
         }
         setI(i+1)
        handleCode(localcode.join(''))
    }
    function handleKey(ekey, value){
        if(ekey === 'Backspace' && !value){
            setI(i - 1)
        }
    }
  return (
    <div className=' w-full flex justify-center mt-8'>
        <div className={`${large? 'w-1/2' : 'w-full px-6'} flex flex-row gap-3 justify-center`}>
            {localcode.map((elt, indx) => <Square active={i === indx} value={elt} handleChange={(value) => handleChange(value, indx)} handlekey={(ekey) => handleKey(ekey, localcode[indx])} key={indx}/>)}
        </div>
    </div>
  )
}

export default CodeVerification
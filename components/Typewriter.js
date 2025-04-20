import { useEffect, useState } from "react"

export default function Typewriter({arr, className, ms}){
    const [write, setWrite] = useState([""])
    const [len, setLen] = useState(0)
    const [foward, setFoward] = useState(false)
    const sentence = arr.join('|') + '|'
    const [indx, setIndx] = useState(0)
    const leng = sentence.length
    const delay = (ts) => new Promise((resolve) => setTimeout(resolve, ts))
    useEffect(()=>{
       const writerFunc = async() => {
        if(len < leng){
            setIndx(prev => prev + 1)
            if(sentence[len] === '|' || foward){
                setWrite(write.slice(0, len))
                await delay(20)
                if(write.slice(0, len).length === 1){
                    setFoward(false)
                    setLen(indx)
                }
                else{
                    setFoward(true)
                    setIndx(prev => prev - 1)
                    setLen(len - 1)
                }

            }
            else{
              
                setWrite([...write, sentence[len]])
                await delay(ms)
                setLen(len + 1)
            }
        }
        else{
            setIndx(0)
            setLen(0)
        }
       }
       writerFunc()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [len])
    return(
      
        <p className={className}>{write.join('')}| </p>
    )

}
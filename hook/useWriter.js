import { useEffect, useState } from "react";

export default function useWriter(data){
    const content = data
    const [currIndx, setCurrIndx] = useState(1)
    const contentLength = content.length
    useEffect(()=>{
        if(currIndx < contentLength){
            const timeId = setTimeout(()=> setCurrIndx(prev => prev + 1), 50);    
            return ()=> clearTimeout(timeId)

        }
    }, [currIndx, contentLength])
    return content.slice(0, currIndx)
    }
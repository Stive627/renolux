"use client"
import { useEffect, useState } from "react";

export default function useScreen(){
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.innerWidth)
        function handleWidth(){
            setWidth(window.innerWidth)
            console.log(window.innerHeight)
        }
        window.addEventListener('resize', handleWidth)
        return () => window.removeEventListener('resize', handleWidth)
    }, [width])
    return width > 600
}
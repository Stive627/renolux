import React, { useEffect, useState } from "react";

export default function useScroll(){
    const [y, setY] = useState(0)
    useEffect(()=>{
        setY(window.scrollY)
        const handleScroll = () => setY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [y])
    return y
}
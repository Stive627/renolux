import {useEffect, useState} from 'react'

function useVisible(elt){
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        function isVisible(){
            const client = elt?.getBoundingClientRect()
            return client?.top.toFixed() >= 0 && client?.bottom.toFixed() <= window.innerHeight
        }
        window.addEventListener('scroll', () => {setVisible(isVisible()); console.log(isVisible())})
       return () => window.removeEventListener('scroll', ()=> setVisible(isVisible()))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setVisible])

    return visible
}

export default useVisible


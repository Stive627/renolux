import useScreen from '@/hook/useScreen'
import React from 'react'

function GalleryLabel({currService}) {

    const large = useScreen()
    const services = ['Placoplâtre', 'Decoration', 'Peinture']

    return (
    <div className=' flex justify-center w-full'>
        <div className=' flex flex-row justify-between gap-4 text-lg mt-5 px-3'>
            {services.map((elt, indx) => <button className={`${currService === indx?' bg-blue-200 p-2 rounded-sm text-blue-900' : 'text-slate-800'} ${large? 'w-96':'w-24'} border border-gray-200 rounded-md`} key={indx}>{elt}</button>)}
        </div>
    </div>
    )

}

export default GalleryLabel

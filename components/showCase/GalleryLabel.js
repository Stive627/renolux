import useScreen from '@/hook/useScreen'
import React from 'react'

function GalleryLabel({currService}) {

    const large = useScreen()
    const services = ['Placoplatre', 'Decoration', 'Peinture']

    if(!large) {return <div className=' flex flex-row justify-between text-lg mt-5 px-3'>{services.map((elt, indx) => <button className={`${currService === indx?'text-blue-600 underline' : 'text-slate-800'}`} key={indx}>{elt}</button>)}</div>}

    return (
        <div className=' col-span-1 border h-96'>
            <div className='h-full flex items-center '>
                <div className='flex flex-col gap-3 w-full '>
                    {services.map((elt, indx) => <button className={`${currService === indx ? 'bg-blue-600 text-white ' : 'bg-slate-400'} p-2 text-lg cursor-pointer`} key={indx}>{elt}</button>)}
                </div>
            </div>
        </div>
    )
    }

export default GalleryLabel

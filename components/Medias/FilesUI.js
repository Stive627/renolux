import React from 'react'
import useScreen from '../hook/useScreen'
import { fetchLink } from '../Ttools'
import Image from 'next/image'

function FilesUI({content, handleManage}) {
    const large = useScreen()
    console.log(content)
    if(content === undefined){
        return(
            <div className='h-64 flex justify-center items-center'>
                <p className='animate-spin text-white p-4 border-2 border-blue-500 rounded-full w-12 h-12 border-b-white'> hi</p>
            </div>
        )
    }
    if(content.length === 0){
        return(
            <p className=' text-center text-[21px]'>No content...</p>
        )
    }
    if(content.length>0){
        console.log(content[0].url)
        return (
            <div className={`grid ${large ? 'grid-cols-3':'grid-cols-2'} gap-2`}>
                {content.map((elt, indx) =><Image width={300} height={300} onClick={() =>handleManage()} key={indx} className='cursor-pointer' alt={`file${indx}`} src={fetchLink(elt.url)}/>)}
            </div>
        )}
}

export default FilesUI
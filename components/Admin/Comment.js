import React from 'react'
import SingleCom from './SingleCom'
import PrefetchUI from '../PrefetchUI'
import axios from 'axios'
import fetchLink from '@/functions/fetchLink'

function Comment({comments, setComments}) {
  if(!comments) return <PrefetchUI/>
  const handleDelete = (id, indx) =>{
    axios({url:fetchLink(`comment/delete/${id}`), method:"DELETE"})
    .then((val)=>{
      console.log(val.data)
      const comts = [...comments]
      const comtsfinal = comts.filter(elt => elt !== comts[indx])
      setComments(comtsfinal)
    })
    .catch(err => console.log(err))
  }
  return (
    <div className=' col-span-10 p-4 overflow-y-scroll h-full'>
      <p className=' font-bold text-[21px]'>Comments</p>
      <div className=' flex flex-col mt-3 gap-3 divide-y divide-gray-200'>
        {comments.map((elt, indx) => <SingleCom key={indx} comment={elt} indx={indx} hasDeleteButton={true} handleDelete={()=>handleDelete(elt._id, indx)}/>)}
      </div> 
    </div>
  )
}

export default Comment

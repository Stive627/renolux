import React from 'react'
import SingleCom from './SingleCom'
import PrefetchUI from '../PrefetchUI'

function Comment({comments, setComments}) {
  if(!comments) return <PrefetchUI/>
  return (
    <div className=' col-span-10 p-4 overflow-y-scroll h-full'>
      <p className=' font-bold text-[21px]'>Comments</p>
      <div className=' flex flex-col mt-3 gap-3'>
        {comments.map((elt, indx) => <SingleCom key={indx} comment={elt} indx={indx} hasDeleteButton={true}/>)}
      </div> 
    </div>
  )
}

export default Comment

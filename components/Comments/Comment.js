import React, { useState } from 'react'
import FormComment from './FormComment'
import useScreen from '@/hook/useScreen'
import DisplayComments from './DisplayComments'

function Comment({comments}) {
  const [comment, setComment] = useState({username:'', message:'', stars:0})
  const large = useScreen()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={`border border-slate-300 w-full ${large &&'grid grid-cols-8'}`}>
     <FormComment handleSubmit={handleSubmit} comment={comment} setComment={setComment}/> 
     <DisplayComments comments={comments}/>
    </div>
  )
}

export default Comment

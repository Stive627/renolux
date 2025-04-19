import React, { useState } from 'react'
import FormComment from './FormComment'
import useScreen from '@/hook/useScreen'
import DisplayComments from './DisplayComments'
import axios from 'axios'
import fetchLink from '@/functions/fetchLink'
import SuccessfullComment from './SuccessfullComment'

function Comment({comments, setComments}) {
  const [comment, setComment] = useState({firstname:'', message:'', stars:0})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const large = useScreen()
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('firstname', comment.firstname)
    formData.append('message', comment.message)
    formData.append('stars', comment.stars)
    console.log(formData)
    axios({url:fetchLink('comment/add'), method:'POST', data:formData, headers:{"Content-Type":"application/json"}})
    .then((value)=>{
      setComments([...comments, value.data])
      console.log('done')
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setComment({firstname:'', message:'', stars:0})
      }, 3500);
    })
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  }
  return (
    <>
    <p className=' text-center text-slate-700 my-3'>Partagez votre expérience avec nos solutions pour aider les autres, s&#39;il vous plaît !</p>
      <div className={`border border-slate-300 w-full ${large &&'grid grid-cols-8'}`}>
      {sent? <SuccessfullComment/> :<FormComment loading={loading} handleSubmit={handleSubmit} comment={comment} setComment={setComment}/> }
      <DisplayComments comments={comments}/>
      </div>
    </>
  )
}

export default Comment

import React from 'react'
import StarsUI from './StarsUI'
import useScreen from '@/hook/useScreen'

function FormComment({comment, setComment, handleSubmit, loading}) {
  const validForm = comment.stars && comment.firstname && comment.message
  const large = useScreen()

  return (
    <div className={`mx-2 ${large && 'border'} rounded-sm border-slate-400 col-span-3 flex justify-center`}>
      <form onSubmit={handleSubmit} className={`${large? 'w-3/5':'w-full border'} rounded-sm border-slate-400 flex  flex-col gap-3 my-3  p-2`}>
        <input className='border rounded-md border-gray-500 h-10 outline-blue-500 px-2 ' value={comment.firstname} onChange={(e) => setComment({...comment, firstname:e.target.value})} placeholder='Entrer votre Prenom'/>
        <textarea className=' border rounded-md border-gray-500 px-2 py-3 outline-blue-500' value={comment.message} style={{resize:'none'}} cols={2} onChange={(e)=> setComment({...comment, message:e.target.value})} placeholder='Entrer votre message'></textarea>
        <StarsUI comment={comment} setComment={setComment}/>
        <div className=' flex justify-end'><button type='submit' disabled={!validForm} style={{backgroundColor:validForm?(loading?'rgba(179, 196, 233, 0.2)':'#0f172b'):'white'}}   className={`w-20 border rounded-md h-8 font-bold ${loading&&' w-32 h-10 bg-slate-800'} ${validForm && ' text-white cursor-pointer'}`}>{loading?'loading...':'Post'}</button></div>
      </form>
    </div>
  )
}

export default FormComment

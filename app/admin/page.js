"use client"
import Admin from '@/components/Admin/Admin'
import Login from '@/components/Admin/Login'
import useAuth from '@/hook/useAuth'
import React, { useState } from 'react'

function Home() {
  const [check, setCheck] = useState(false)
  const auth = useAuth(check)
  switch(auth.status){
    case undefined:
      return <div></div>
    case true:
      return <Admin/>
    case false:
      return <Login setCheck={setCheck}/>
  }
}

export default Home

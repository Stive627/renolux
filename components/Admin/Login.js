import React, { useEffect, useState } from 'react'
import Square from './Square';
import { LeftNav } from '../Accueil/Navbar';

function Login({setCheck}) {
    const secretPassword = process.env.NEXT_PUBLIC_OTP
    console.log(secretPassword)
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [currIndx, setCurrIndx] = useState(0)
    const [clientMes, setClientMes] = useState('loading...')
    const handleValue = (indx, val) => {
        const newOtp = [...otp]
        newOtp[indx] = val
        setOtp(newOtp)
        setCurrIndx(currIndx + 1)
    }
    useEffect(()=>{
        const password = otp.join('')
        if(password.length === 6){
            if(+password === +secretPassword){
                const timeId = setTimeout(() => {
                    localStorage.setItem('renoluxotp', secretPassword)
                    setCheck(true)
                }, 700);
                return ()=> clearTimeout(timeId)
            }
            else{
                const timeId = setTimeout(() => setClientMes('Le mot de passe est erroné'), 500);
                return ()=> clearTimeout(timeId)
            }
        }
    },[otp, setCheck, secretPassword])
  return (
    <>
        <LeftNav/>
        <p className=' font-semibold text-lg mt-5 text-center'>Entrez votre mot de passe🫠</p>
        <div className=' flex flex-row gap-3 mt-8 justify-center'>
            {otp.map((elt, indx) => <Square key={indx} val={elt} setValue={handleValue} indx={indx} currIndx={currIndx} setCurrIndx={setCurrIndx}/>)}
        </div>
        {otp.join('').length === 6 && <p className=' text-center mt-4 text-red-800'>{clientMes}</p>}
    </>
  )
}

export default Login
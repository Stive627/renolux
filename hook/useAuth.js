import { useEffect, useState } from "react";

export default function useAuth(check=false){
    const [auth, setAuth] = useState({status:undefined, message:'' })
    useEffect(()=>{
        // localStorage.clear('renoluxotp')
        if(localStorage.getItem('renoluxotp')){
            setAuth({status:true, message:'Authentication granted'})
        }
        else{
            setAuth({status:false, message:'Please, login to continue'})
        }
    },[check])
    return auth
}
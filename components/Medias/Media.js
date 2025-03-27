"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import AttachFile from './AttachFile'
import HandleFile from './HandleFile'
import MediaContent from './MediaContent'
import axios from 'axios'
import Navbar from '../Accueil/Navbar'
import fetchLink from '@/functions/fetchLink'
import useScreen from '@/hook/useScreen'

function Media() {
  const [file, setFile] = useState(undefined)
  useEffect(()=>{ 
    axios({method:'GET', url:fetchLink('media/show'), headers:{"Content-Type":"application/json"}})
    .then(value =>{
      setContent({Placoplatre:value.data.filter(elt => elt.category === 'Placoplatre'), Decoration:value.data.filter(elt => elt.category === 'Decoration'), Peinture:value.data.filter(elt => elt.category === 'Peinture')})
    })
    .catch(err => console.log(err))
  },[file])
    const [active, setActive] = useState(0)
    const [manage, setManage] = useState(false)
    const [type, setType]=useState('--select the service--')
    const large = useScreen()
    const [content, setContent] = useState({Placoplatre:undefined, Decoration:undefined, Peinture:undefined})
    const disable = type === '--select the service--'
    function handleAjouter(){
      var formdata = new FormData()
      formdata.append('category', type)
      formdata.append('media', file)
      axios({method:'POST', url:fetchLink('media/add'), data:formdata})
      .then(value =>{
        console.log(value.data)
        setFile(undefined)
      })
      .catch(err => console.log(err))
    }
  return (
    <div>
        <Navbar/>
        <div className=' flex justify-center w-screen'>
          <div className={`${large ? 'w-1/2' : ' w-full'}`}>
          { !file && <>
                      <Header active={active} handleActive={(val) => setActive(val)}/>
                      <div className=" float-right relative right-7 bottom-5"><AttachFile handlefile={(value) =>{ setFile(value); console.log(value)}}/></div>
                      <div className=' mt-16'><MediaContent handleManage={() =>setManage(true)} content={content} active={active} /></div>
                    </>
          }
            {file && <HandleFile disable={disable}  type={type} elts={['Placoplatre', 'Decoration', 'Peinture']}  handleType={setType} file={file} handleAnnuler={()=>setFile(undefined)} handleAjouter={handleAjouter}/>}
          </div>
          {manage && <div className=' absolute  top-20 w-screen h-full flex justify-center items-center' style={{backgroundColor:'rgba(0, 0, 0, 0.9)'}}>
                          <div className=' w-1/2 bg-white h-2/3'></div>
                     </div>
          }
        </div>
    </div>
  )
}

export default Media
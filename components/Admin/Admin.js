import React, { useEffect, useRef, useState } from 'react'
import { LeftNav } from '../Accueil/Navbar'
import MenuIcon from '@mui/icons-material/Menu';
import useScreen from '@/hook/useScreen'
import Sidebar from './Sidebar'
import Content from './Content'
import SmallSidebar from './SmallSidebar';
import axios from 'axios';
import fetchLink from '@/functions/fetchLink';

function Admin() {
  const large = useScreen()
  const [currIndx, setCurrIndx] = useState(0)
  const [comments, setComments] = useState('')
  const [medias, setMedias] = useState([])
  useEffect(()=>{
    axios({url:fetchLink('comment'), method:'GET'})
    .then((val) => setComments(val.data))
    .catch(err => console.error(err.response.data))
  },[])
  useEffect(()=>{
    axios({url:fetchLink('media/show'), method:'GET'})
    .then((val) => setMedias(val.data))
    .catch(err => console.error(err.response.data))
  },[])
  const sidenavRef = useRef()
  function openNav() {
    sidenavRef.current.style.width = "100%";
  }
function closeNav() {
  sidenavRef.current.style.width = "0px";
}
function handleClickSmallNav(indx){
  setCurrIndx(indx)
  closeNav()
}
  return (
    <div className=' h-screen w-screen overflow-y-scroll'>
      {large ? <LeftNav/>:<div className=' flex flex-row items-center gap-4 pl-3'> <button onClick={openNav}><MenuIcon sx={{fontSize:32}}/></button><LeftNav/></div>}
      <hr className=' text-gray-300'/>

      <SmallSidebar closeNav={closeNav} sidenavRef={sidenavRef} handleClickSmallNav={handleClickSmallNav} currIndx={currIndx}/>
      <div className={`${large ? 'grid  grid-cols-12 h-full':' h-full w-full'}`}>
        {large && <Sidebar setCurrIndx={setCurrIndx} currIndx={currIndx}/>}
        <Content medias={medias} comments={comments} setComments={setComments} setMedias={setMedias} currIndx={ currIndx} setCurrIndx={setCurrIndx}/>
      </div>
    </div>
  )
}

export default Admin

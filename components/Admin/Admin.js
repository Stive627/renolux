import React, { useRef, useState } from 'react'
import { LeftNav } from '../Accueil/Navbar'
import MenuIcon from '@mui/icons-material/Menu';
import useScreen from '@/hook/useScreen'
import Sidebar from './Sidebar'
import Content from './Content'
import SmallSidebar from './SmallSidebar';

function Admin() {
  const large = useScreen()
  const [currIndx, setCurrIndx] = useState(0)
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
    <div className=' h-screen w-screen overflow-hidden'>
      {large ? <LeftNav/>:<div className=' flex flex-row items-center gap-4 pl-3'> <button onClick={openNav}><MenuIcon sx={{fontSize:32}}/></button><LeftNav/></div>}
      <SmallSidebar closeNav={closeNav} sidenavRef={sidenavRef} handleClickSmallNav={handleClickSmallNav} currIndx={currIndx}/>
      <div className={`${large ? 'grid  grid-cols-12 h-full':' h-full w-full'}`}>
        {large && <Sidebar setCurrIndx={setCurrIndx} currIndx={currIndx}/>}
        <Content currIndx={ currIndx}/>
      </div>
    </div>
  )
}

export default Admin

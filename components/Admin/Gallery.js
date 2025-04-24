import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import FormAdd from './FormAdd';
import SingleCategory from './SingleCategory';
import useScreen from '@/hook/useScreen';

function Gallery( {setMedia, medias}) {
  const [showForm, setShowForm] = useState(false)
  const handleShowForm = () => setShowForm(true)
  const handleCloseForm = () => setShowForm(false)
  const [currIndx, setCurrIndx] = useState(3)
  const large = useScreen()
  const singleCategoryRef = useRef(new Map())
    const handleFull = (indx) => {
      const node = singleCategoryRef.current.get(indx)
      // node.style.height='1500px'
      node.style.overflow='scroll'
      node.scrollTo({top:10000, behavior:'smooth'})
      setCurrIndx(indx)
    }
    const handleShowLess = (indx) => {
      const node = singleCategoryRef.current.get(indx)
        node.scrollTo({top:0, behavior:'smooth'})
        node.style.height=large?'525px':'370px'
        node.style.overflow='hidden'
        setCurrIndx(3)
    }
  if(showForm) return <FormAdd setMedias={setMedia} medias={medias} handleCloseForm={handleCloseForm}/>
  return(
    <div className=' col-span-10 ' style={{borderTopColor:'rgba(226, 221, 221, 1)'}}>
      <button onClick={handleShowForm} style={{backgroundColor:'rgba(57, 55, 55, 1)'}} className=' fixed bottom-5 right-5 p-2 rounded-full cursor-pointer'><AddIcon sx={{color:'white'}}/></button>
      <div>
        {['Placoplâtre', 'Decoration', 'Peinture'].map((elt, indx) => <SingleCategory currIndx={currIndx} indx={indx} handleFull={handleFull} handleShowLess={handleShowLess} handleRef={(node) => singleCategoryRef.current.set(indx, node)}  key={indx} title={elt} medias={medias.slice(0,10)}/>)}
      </div>
    </div>
  )
}

export default Gallery

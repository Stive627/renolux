import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import FormAdd from './FormAdd';

function Gallery( {setMedia, medias}) {
  const [showForm, setShowForm] = useState(false)
  const handleShowForm = () => setShowForm(true)
  const handleCloseForm = () => setShowForm(false)
  if(showForm) return <FormAdd setMedias={setMedia} medias={medias} handleCloseForm={handleCloseForm}/>
  return(
    <div className=' col-span-10 ' style={{borderTopColor:'rgba(226, 221, 221, 1)'}}>
      <button onClick={handleShowForm} style={{backgroundColor:'rgba(57, 55, 55, 1)'}} className=' fixed bottom-5 right-5 p-2 rounded-full cursor-pointer'><AddIcon sx={{color:'white'}}/></button>
    </div>
  )
}

export default Gallery

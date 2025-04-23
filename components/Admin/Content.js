import React from 'react'
import Home from './Home'
import Comment from './Comment'
import Gallery from './Gallery'

function Content({currIndx, setCurrIndx,comments, setComments, medias, setMedias}) {
  switch(currIndx){
    case 0:
      return <Home comment={comments} setCurrIndx={setCurrIndx} medias={medias}/>
    case 1:
      return <Comment comments={comments} setComments={setComments}/>
    case 2:
      return <Gallery setMedia={setMedias} medias={medias}/>
    default:
      return <p>An error occured</p>
  }
 
}

export default Content

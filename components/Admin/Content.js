import React from 'react'
import Home from './Home'
import Comment from './Comment'
import Gallery from './Gallery'

function Content({currIndx}) {
  switch(currIndx){
    case 0:
      return <Home/>
    case 1:
      return <Comment/>
    case 2:
      return <Gallery/>
    default:
      return <p>An error occured</p>
  }
 
}

export default Content

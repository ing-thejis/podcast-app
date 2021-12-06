import React, { useContext } from 'react'
import ContentContext from '../../context/Content/ContentContext'
import Canal from './canal/Canal'
import Home from './home/Home'

const Content = () => {


  const { stateContent } = useContext(ContentContext)
  
  return (
      <>
        {stateContent === 'HOME' ? <Home /> : <Canal />}  
      </>
  )
}

export default Content

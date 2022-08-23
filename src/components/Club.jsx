import React from 'react'

import Categores from './Categores'
const Club = () => {
  return (
    <div className='flex flex-wrap gap-5 justify-center items-center'>
        <Categores head="Event" title="event"/>
        <Categores head="Techies" title="Techies"/>
        <Categores head="StartUp" title="StartUp"/>
        <Categores head="Learning" title="Learning"/>
    </div>
  )
}

export default Club
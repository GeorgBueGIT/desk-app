import React from 'react'
import '../Styles/Kalender.css'
import Tag from '../Components/Tag.js'

function Kalender() {
  return (
<>
        <div id='day'>
        <p> MO </p>
        <p> DI </p>
        <p> MI </p>
        <p> DO </p>
        <p> FR </p>
    </div>
    <div className='aroundK'> 
    

    <Tag/>
    <Tag/>
    <Tag/>
    <Tag/>
    <Tag/>
    
    
    
    
    
    
    
    </div>
</>
  )
}

export default Kalender
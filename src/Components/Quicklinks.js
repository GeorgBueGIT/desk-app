import React from 'react'
import '../Styles/Quicklinks.css';

function Quicklinks() {
  return (
    <>
     <div className="box">
    <img src={require('../Media/outlooks.jpg')} className='pic' onClick={{href: "http://google.com"}} />
    <img src={require('../Media/moodle.png')} className='pic' />
    <img src={require('../Media/outlooks.jpg')} className='pic' />
    <img src={require('../Media/moodle.png')} className='pic' />
     </div>
    </>
  )
}

export default Quicklinks
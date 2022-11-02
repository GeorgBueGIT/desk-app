import React from 'react'
import backgroundVideo from '../Media/Mind.Clear.mp4';
import "../Styles/Header.css";

function Header() {
  return (
    <>
            <div className='bar'>
    <video autoPlay loop muted id='video' height={'80%'} >
      <source src={backgroundVideo} type="video/mp4"/>
    </video>
        </div>
    </>
  )
}

export default Header
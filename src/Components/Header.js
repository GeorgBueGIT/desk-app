import React from 'react'
import backgroundVideo from '../Media/Mind.Clear.mp4';
import "../Styles/Header.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Header() {
  return (
    <>
            <div className='bar'>
    <video autoPlay loop muted id='video' height={'80%'} >
      <source src={backgroundVideo} type="video/mp4"/>
    </video>

   <MenuRoundedIcon className='Menu' fontSize='large'></MenuRoundedIcon>
        </div>
    </>
  )
}

export default Header
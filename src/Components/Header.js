import React from 'react'
import backgroundVideo from '../Media/Mind.Clear.mp4';
import "../Styles/Header.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Clock from "../Components/Clock";

function Header() {
  return (
    <>
            <div className='bar'>
            <Clock/>
   <MenuRoundedIcon className='Menu' fontSize='large'></MenuRoundedIcon>
        </div>
    </>
  )
}

export default Header
import React from 'react'
import '../Styles/Quicklinks.css';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import Draggable from "react-draggable";

function Quicklinks() {
  return (
    <>
<Draggable bounds={{left: -1380, top: 20, right: 50, bottom: 420}} handle=".headQuick"> 
     <div className="box">

     <div className='headQuick'>
    <b className='paddingleft'> Quicklinks </b>
    <AppsRoundedIcon></AppsRoundedIcon> 
    </div>

<div className='quickFlex'>
    <img src={require('../Media/outlooks.jpg')} className='pic' alt='' />
    <img src={require('../Media/moodle.png')} className='pic' alt='' />
    <img src={require('../Media/outlooks.jpg')} className='pic' alt='' />
    <img src={require('../Media/moodle.png')} className='pic' alt='' />
    
</div>
     </div>
     </Draggable> 
    </>
  )
}

export default Quicklinks
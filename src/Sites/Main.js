import Clock from "../Components/Clock";
import Notes from "../Components/Notes";
import GoogleSearch from "../Components/GoogleSearch";
import Quicklinks from "../Components/Quicklinks";
import Header from "../Components/Header";
import BigTasks from "../Components/BigTasks";
import Kalender from "../Components/Kalender";
import "../Styles/Main.css";

import React from 'react'

function Main() {
  return (
    <>
    <Header/>
   <div className="ordnung">
  
  <div className="under">
    <BigTasks/>
    <Clock/>
    <Notes/>
  </div>
    <GoogleSearch/>
    
    {/* <Quicklinks/> */}
    <Kalender/>
    
    </div>

    </>
  )
}

export default Main
import Header from "../Components/Header";
import BigTasks from "../Components/BigTasks";
import Quicklinks from "../Components/Quicklinks";
import Notes from "../Components/Notes";
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
    <Notes/>
    <Quicklinks/>


  </div>
        <Kalender/>
    </div>

    </>
  )
}

export default Main
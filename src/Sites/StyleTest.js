import Header from "../Components/Header";
import BigTasks from "../Components/BigTasks";
import Clock from "../Components/Clock";
import Notes from "../Components/Notes";
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

  </div>
    
    </div>

    </>
  )
}

export default Main
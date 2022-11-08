import Header from "../Components/Header";
import BigTasks from "../Components/BigTasks";
import "../Styles/Main.css";

import React from 'react'

function Main() {
  return (
    <>
    <Header/>
   <div className="ordnung">
  
  <div className="under">
    <BigTasks/>

  </div>
    
    </div>

    </>
  )
}

export default Main
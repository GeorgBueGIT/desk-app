import React from 'react'
import '../Styles/Kalender.css'
import Day from "./Day";
import Draggable from "react-draggable";


function Kalender() {
  return (
    <>
      <Draggable bounds={{ left: 0, top: -395, right: 0, bottom: 47 }} handle=".headCalender">

        <div className='boxCalender'>

          <div className='headCalender'>
            <div className='width10'></div>
            <p className='width20'> MO </p>
            <p className='width20'> DI </p>
            <p className='width20'> MI </p>
            <p className='width20'> DO </p>
            <p className='width20'> FR </p>
          </div>

          <div className='aroundK'>
            <div className='dayConstFlex'> {Array.from({ length: 24 }, (_, i) => <div key={i} className='hoursConst'> {i}:00</div>)} </div>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />

          </div>

        </div>

      </Draggable>
    </>
  )
}

export default Kalender
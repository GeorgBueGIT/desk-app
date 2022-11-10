import React from 'react'
import "../Styles/Kalender.css";

function day() {

    const doConsole = () => {
          console.log("Aua")
    }

return (

    <div className='dayFlex'>
{Array.from({ length: 24 }, (_, i) => <div key={i} className='hours' onClick={doConsole}></div>)}

    </div>



)
}

export default day
import React, { useEffect, useState } from "react";
import '../Styles/clockStyle.css';

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="clockFont">{clockState} </div>;
}

export default Clock;
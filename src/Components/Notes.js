import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

function Notes() {


const notesAr = [
    {status: false, task: "Duschen"},
    {status: false, task: "Kochen"},
    {status: true, task: "Einkaufen"}
];


const [array, setStatus] = useState(notesAr);



  const updateState = index => {
    let newArr = [...array]; 
    newArr[index].status = !newArr[index].status;   
    setStatus(newArr);

  };



  return  (

    <div>
        <Checkbox checked={array.at(0).status} onChange={() => updateState(0)} />
        <b> {array.at(0).task}</b>
        <Checkbox checked={array.at(1).status} onChange={() => updateState(1)} />  
        <b> {array.at(1).task}</b>
        <Checkbox checked={array.at(2).status} onChange={() => updateState(2)} />  
        <b> {array.at(2).task}</b>  
    </div>
  )
}


export default Notes
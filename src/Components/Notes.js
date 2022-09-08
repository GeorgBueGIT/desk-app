import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Input from '@mui/material/Input';

function Notes() {


  const notesAr = [
    { id: 1, status: false, task: "Duschen" },
    { id: 2, status: false, task: "Kochen" },
    { id: 3, status: true, task: "Einkaufen" }
  ];


  const [array, setStatus] = useState(notesAr);
  const [textInput, setTextinput] = useState("");



  const updateState = index => {

    let newArr = [...array];

    for (let i = 0; i < newArr.length; i++) {
      if (index.id === newArr.at(i).id) {
        newArr.at(i).status = !newArr.at(i).status;
      }
    }
    setStatus(newArr);
  };


  const changeInput =(e) => {
    setTextinput(e.target.value);
  }



const submitInput = () => {
  const newArray = [...array, {id: 99, status: false, task: textInput}]
  setStatus(newArray);
  console.log(newArray)
  return;
}


  return (


    <div>

      {array.map((index) => {
        return (

          <div key={index.id}>

            <Checkbox checked={index.status} onChange={() => updateState(index)} />
            <b> {index.task}</b>

          </div>

        );
      })}
      <form  onSubmit={submitInput}> 
      <Input id="outlined-basic" label="New Task" variant="outlined" type='text' onChange={changeInput} />
      </form>

    </div>


  );
}


export default Notes;
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function Notes() {


  const notesAr = [
    { id: 1, status: false, task: "Duschen" },
    { id: 2, status: false, task: "Kochen" },
    { id: 3, status: true, task: "Einkaufen" }
  ];


  const [array, setStatus] = useState(notesAr);

  const [inputs, setInputs] = useState('');


  const updateState = index => {

    let newArr = [...array];

    for (let i = 0; i < newArr.length; i++) {
      if (index.id === newArr.at(i).id) {
        newArr.at(i).status = !newArr.at(i).status;
      }
    }

    setStatus(newArr);
  };




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

      <Button variant="outlined" > Add </Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={inputs} />

    </div>


  );
}


export default Notes;
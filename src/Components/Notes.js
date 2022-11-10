import React from 'react'
import { useState } from 'react';
import Input from '@mui/material/Input';
import '../Styles/Notes.css';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';

let index = 0;

function Notes() {



  const [array, setArray] = useState([]);
  const [textInput, setTextinput] = useState("");


  const changeInput = (e) => {
    setTextinput(e.target.value);
  }

  const submitInput = (e) => {
    e.preventDefault();
    const newArray = [...array, { id: index, status: false, task: textInput }]
    index++;
    setTextinput('');
    setArray(newArray);


    return;
  }



  return (


    <div className='around'>

    <div className='headNotes'>
    <b className='paddingleft'> Daily ToDo </b>
    <ListAltRoundedIcon ></ListAltRoundedIcon>
    
    </div>


      <div className='tasks'>
        {/* Tasks */}
        {array.map((index) => {
          return (
            <>
              <div key={index.id}>

                <div className='task'>
                  <b className='taskText'>  {index.task}</b>
                </div>

              </div>

            </>
          );
        })}

        {/* Add Tasks */}
      </div>
      <div className='insertField'>
        <form onSubmit={submitInput}>
          <Input id="outlined-basic" label="New Task" variant="outlined" type='text' onChange={changeInput} placeholder="Hinzufügen..." value={textInput} />
        </form>

      </div>

    </div>


  );
}


export default Notes;
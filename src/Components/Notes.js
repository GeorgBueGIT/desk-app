import React from 'react'
import { useState } from 'react';
import Input from '@mui/material/Input';
import '../Styles/Notes.css';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import Draggable from "react-draggable";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

let index = 1;

function Notes() {



  const [array, setArray] = useState([{id: 0, focused: false, task: "Hi"}]);
  const [textInput, setTextinput] = useState("");


  const changeInput = (e) => {
    setTextinput(e.target.value);
  }

  const submitInput = (e) => {
    e.preventDefault();
    const newArray = [...array, { id: index, focused: false, task: textInput }]
    index++;
    setTextinput('');
    setArray(newArray);


    return;
  }


  const changeFocused = (id) => {
    let tempAr = array;
    for (let index = 0; index < array.length; index++) {
      if (tempAr[index].id === id) {
        tempAr[index] = { id: array[index].id, focused: !array[index].focused, task: array[index].task };
        
        setArray([...tempAr]);
      }
    }

  }

  const removeSelf = (id) => {

    let remainingItems = array.filter((item) => {return item.id !== id});
    setArray([...remainingItems]);
    // console.log(array);

    // console.log(remainingItems);

  }

  const removeAll = () => {
    let remainingItems = array.filter((item) => {return item.id == -1});
    setArray([...remainingItems]);
  }


  return (

<Draggable bounds={{left: -870, top: 20, right: 520, bottom: 420}} handle=".headNotes"> 
    <div className='around'>

    <div className='headNotes'>
    <b className='paddingleft'> Daily ToDo </b>
    <ListAltRoundedIcon ></ListAltRoundedIcon>
    
    </div>


      <div className='tasks'>
        {/* Tasks */}
        {array.map((index) => {

            if(!index.focused){
                        return (
            <>
              <div key={index.id}>

                <div className='task' onClick={() => { changeFocused(index.id)}}>
                  <b className='taskText'>  {index.task}</b>
                </div>

              </div>

            </>
          );
            }
            else{
              return (
                <>
                  <div key={index.id}>
    
                    <div className='task2'>
                      <div className='dont' onClick={() => { changeFocused(index.id)}}>
                      <b className='taskText'>  {index.task} </b>
                      </div>
                      {/* <div className='bothOptions'> */}
                      {/* <div className="options1">  
                      <PriorityHighOutlinedIcon fontSize='small'></PriorityHighOutlinedIcon>
                      </div> */}
                      <div className="option">
                      <CheckRoundedIcon fontSize='small' onClick={() => {removeSelf(index.id)}}></CheckRoundedIcon>
                      </div>
                      {/* </div> */}
                    </div>
    
                  </div>
    
                </>
              );
            }


        })}

        {/* Add Tasks */}
      </div>
      <div className='insertField'>
        <form onSubmit={submitInput}>
          <Input id="outlined-basic" label="New Task" variant="outlined" type='text' onChange={changeInput} placeholder="Hinzufügen..." value={textInput} />
        </form>
        <DeleteIcon onClick={() => {removeAll()}}></DeleteIcon>
      </div>

    </div>
    </Draggable> 

  );
}


export default Notes;
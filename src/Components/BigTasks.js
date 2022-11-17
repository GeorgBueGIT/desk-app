import React, { useState } from 'react'
import '../Styles/BigTasks.css';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Draggable from "react-draggable";




const ar = [{ id: 1, task: "Bewerbung", due: dayjs('2022-11-20'), start: dayjs('2022-11-07') }, { id: 2, task: "IT Sec", due: dayjs('2022-12-21'), start: dayjs('2022-11-14') }];

const lowerTasks = [{ id: 1, lId: 1, task: 'Lebenslauf', done: true }, { id: 1, lId: 2, task: 'Anschreiben', done: false }, { id: 1, lId: 3, task: 'Stellen suchen', done: false },
{ id: 2, lId: 4, task: 'Overthewire Natas', done: false }, { id: 2, lId: 5, task: 'Präsentation', done: false }, { id: 2, lId: 6, task: 'E-Test', done: false }]

let idCounter = 3;
let lIdCounter = 7;


function BigTasks() {

  function CustomDialog(props) {

    const { onClose, open } = props;

    const [textName, setTextName] = useState("");
    const [date, setDate] = useState(dayjs());
    const [things, setThings] = useState("");

    function changeThings(e) {
      setThings(e.target.value);
    }

    function changeName(e) {
      setTextName(e.target.value);
    }

    function changeDate() {
      setDate(date);
    }

    const handleClose = () => {
      onClose();
    };


    const handleAdd = () => {

      let tempArr = array;
      let tempLower = lowerAr;


      tempArr.push({ id: idCounter, task: textName, due: dayjs(date), start: dayjs() });

      var splitArray = things.split(', ');

      for (let i = 0; i < splitArray.length; i++) {
        tempLower.push({ id: idCounter, lId: lIdCounter, task: splitArray.at(i), done: false });
        lIdCounter++;
      };
      idCounter++;
      // lowerTasks.push({ id: 3, task: "afaf" });
      setArray([...tempArr]);
      setlowerAr([...tempLower]);
      onClose();
    };

    const handleChange = (newDate) => {
      changeDate();
      setDate(newDate);
    };


    return (
      <Dialog onClose={handleClose} open={open} >
        <DialogTitle>Add Big Task</DialogTitle>

        <div className='DialogStruc'>
          <Input placeholder='Name' onChange={changeName}> </Input>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Due Date"
              inputFormat="YYYY/MM/DD"
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <div className='addLowerTasks'>
          <Input placeholder='Things to do (comma seperated)' onChange={changeThings} sx={{ width: 240 }}> </Input>

          {/* <AddCircleOutlineSharpIcon className='CircleAdd' /> */}
        </div>

        <Button onClick={handleAdd}> Add </Button>

      </Dialog>
    );
  }

  function getleftDays(due) {
    var now = dayjs(new Date());


    let hours = due.diff(now, 'hours');
    const days = Math.floor(hours / 24);
    hours = hours - (days * 24);

    return days + "D " + hours + "H";
  };


  const [array, setArray] = useState(ar);
  const [lowerAr, setlowerAr] = useState(lowerTasks);


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };


  const changelowerArStatus = (lId) => {
    let tempAr = lowerAr;
    for (let index = 0; index < lowerAr.length; index++) {
      if (tempAr[index].lId === lId) {
        tempAr[index] = { id: lowerAr[index].id, lId: lowerAr[index].lId, task: lowerAr[index].task, done: !lowerAr[index].done };
        setlowerAr([...tempAr]);
      }
    }

  }

  const getPercentage = (index) => {
    var now = dayjs(new Date());
    let hours = index.due.diff(index.start, 'hours');
    let hours2 = index.due.diff(now, 'hours');
    return 100 - Math.round((hours2 / hours) * 100);
  }

  return (
    <>

      <Draggable bounds={{ left: -50, top: 20, right: 1030, bottom: 370 }} handle=".headNotes">
        <div className='boxBig'>
          <div className='headNotes'>
            <b className='paddingleft'> Long Term Tasks </b>
            <AssignmentOutlinedIcon></AssignmentOutlinedIcon>

          </div>
          <div className='aroundBigTasks'>
            {array.map((index) => {
              return (
                <div key={index.id}>
                  <div className='bigTask'>

                    <div className='bigTaskHeader'>
                      <b>  {index.task} </b>
                      <div className='progressAndDate'>
                        <b className='date'>{getleftDays(index.due)}</b>
                        <CircularProgress variant="determinate" value={getPercentage(index)} sx={{ color: 'white' }} thickness={5} size={20} />
                      </div>
                    </div>

                    {/* <div className='Trennung'></div> */}

                    <div className='aroundLowerTasks'>
                      {lowerAr.map((index2) => {
                        if (index2.id === index.id) {

                          return (
                            <>
                              <div className='lowerTaskDiv' key={index2.id}>
                                <div className={index2.done ? 'lowerTaskTextSelected' : 'lowerTaskText'} onClick={() => { changelowerArStatus(index2.lId) }} >
                                  <b> {index2.task} </b>
                                </div>
                              </div>

                            </>
                          )
                        }
                        return "";
                      })}

                    </div>
                    {/* <div className='Trennung'></div> */}

                    <b className='due'>  {index.due.get('date')}.{index.due.get('month') + 1}.{index.due.get('year')} </b>


                  </div>
                </div>
              );
            })}
            <div className='taskAdd'>
              <AddCircleOutlineSharpIcon className='CircleAdd' onClick={handleClickOpen} />
              <CustomDialog
                open={open}
                onClose={handleClose}
                className='Dialgo'
              />
            </div>
          </div>
        </div>
      </Draggable>
    </>
  )
}

export default BigTasks
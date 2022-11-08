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
import Checkbox from '@mui/material/Checkbox';




//   SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
//   };



const ar = [{ id: 1, task: "Bewerbung", duration: dayjs('2022-11-20') }, { id: 2, task: "IT Sec", duration: dayjs('2022-12-21') }];
const lowerTasks = [{ id: 1, task1: 'Lebenslauf', task2: 'Anschreiben', task3: 'Stellen suchen' },
{ id: 2, task1: 'Overthewire Natas', task2: 'Präsentation', task3: 'E-Test' }]




function BigTasks() {

  function CustomDialog(props) {

    const { onClose, open } = props;

    // var date = new Date().toLocaleString() + "";

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
      setDate(value);
      // console.log(date);
    }

    const handleClose = () => {



      onClose();
    };

    const handleAdd = () => {

      ar.push({ id: 3, task: textName, duration: dayjs(date) });
      lowerTasks.push({ id: 3, task1: "fafa", task2: '', task3: '' });
      setArray(ar);
      setlowerAr(lowerTasks);

      onClose();
    };

    const [value, setValue] = React.useState(dayjs({ date }));

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
        <Input placeholder='Things to do' onChange={changeThings}> </Input>

        <Button onClick={handleAdd}> Add </Button>

      </Dialog>
    );
  }

  function getleftDays(due) {
    var now = dayjs(new Date());

    let hours = due.diff(now, 'hours');
    const days = Math.floor(hours / 24);
    hours = hours - (days * 24);

    console.log('Days: ', days);
    console.log('Hours: ', hours);

    return "Due in " + days + " Days and " + hours + " Hours";
  };


  const [array, setArray] = useState(ar);
  const [lowerAr, setlowerAr] = useState(lowerTasks);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };


  return (
    <>

      <div className='aroundBig'>


        {array.map((index) => {
          return (
            <div>
              <div className='tasksBig'>
                <div key={index.id}>

                  <div className='struc'>
                    <b>  {index.task} </b>


                    {lowerAr.map((index2) => {
                      return (
                        <>
                          <div className='lowerTaskDiv'>
                            <Checkbox sx={{ transform: "scale(0.8)", padding: 0 }} />
                            <div className='lowerTaskAround'>
                              <b id='due'> {lowerAr.at(index.id - 1).task1} </b>
                            </div>
                          </div>

                        </>
                      )})};

                      <div id='right'>
                        <b id='due'>  {getleftDays(index.duration)} </b>
                      </div>

                  </div>
                </div>


              </div>
              <div className='spacer'> </div>
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

    </>
  )
}

export default BigTasks
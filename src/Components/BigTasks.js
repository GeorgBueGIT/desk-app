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
import CircularProgress from '@mui/material/CircularProgress';





//   SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
//   };



const ar = [{ id: 1, task: "Bewerbung", duration: dayjs('2022-11-20') }, { id: 2, task: "IT Sec", duration: dayjs('2022-12-21') }];

const lowerTasks = [{ id: 1, task: 'Lebenslauf', done: true }, { id: 1, task: 'Anschreiben', done: false }, { id: 1, task: 'Stellen suchen', done: false },
{ id: 2, task: 'Overthewire Natas', done: false }, { id: 2, task: 'Präsentation', done: false }, { id: 2, task: 'E-Test', done: false }]




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
      setDate(value);
      // console.log(date);
    }

    const handleClose = () => {



      onClose();
    };

    const handleAdd = () => {

      ar.push({ id: 3, task: textName, duration: dayjs(date) });

      var splitArray = things.split(', ');

      for (let i = 0; i < splitArray.length; i++) {
        lowerTasks.push({ id: 3, task: splitArray.at(i), done: false });
      };

      // lowerTasks.push({ id: 3, task: "afaf" });
      setArray(ar);
      setlowerAr(lowerTasks);

      onClose();
    };

    const [value, setValue] = React.useState(dayjs({ date }));

    const handleChange = (newDate) => {
      changeDate();
      setDate(newDate);
    };

    // const addLowerTasksFunc = () => {
    //   let content = [];
    //   for (let i = 0; i < 2; i++) {
    //     content.push(<Input placeholder='Things to do' onChange={changeThings}> </Input>);
    //   }
    //   return content;
    // };


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

    console.log('Days: ', days);
    console.log('Hours: ', hours);

    return days + "D " + hours + "H";
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

  const percentage = 66;


  const changeDoneState = (i) => {
    console.log("wei n")
    let tempAr = lowerAr;
    tempAr[i] = { id: tempAr[i].id, task: tempAr[i].task, done: tempAr[i].done };
    setlowerAr(tempAr);
  }


  return (
    <>

      <div className='aroundBigTasks'>


        {array.map((index) => {
          return (
            <div>
              <div className='bigTask'>

                <div className='bigTaskHeader'>
                  <b>  {index.task} </b>
                  <div className='progressAndDate'>
                    <b className='date'>{getleftDays(index.duration)}</b>
                    <CircularProgress variant="determinate" value={77} sx={{ color: 'white' }} thickness={5} size={20} />
                  </div>
                </div>

                <div className='Trennung'></div>
                  
                <div className='aroundLowerTasks'>
                  {lowerAr.map((index2) => {
                    if (index2.id === index.id) {
                      if (!index2.done) {
                        return (
                          <>
                            <div className='lowerTaskDiv'>
                              <div className='lowerTaskText' onClick={() => { changeDoneState(lowerAr.indexOf(index2)) }} >
                                <b> {index2.task} </b>
                              </div>
                            </div>

                          </>
                        )
                      }
                      else {
                        return (
                          <>
                            <div className='lowerTaskDiv'>
                              <div className='lowerTaskTextSelected' onClick={() => { changeDoneState(lowerAr.indexOf(index2)) }}>
                                <b> {index2.task} </b>
                              </div>
                            </div>

                          </>)
                      }
                    } return null;
                  })}

                </div>
                <div className='Trennung'></div>

                  <b className='due'>  {index.duration.get('date')}.{index.duration.get('month')}.{index.duration.get('year')} </b>
                





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

    </>
  )
}

export default BigTasks
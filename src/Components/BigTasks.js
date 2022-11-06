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



function CustomDialog(props) {

    const { onClose, open } = props;

    // var date = new Date().toLocaleString() + "";

    const [textName, setTextName] = useState("");
    const [date, setDate] = useState(new Date().toLocaleString() + "");
    const [things, setThings] = useState("");

    function changeThings (e) {
         setThings(e.target.value);
    }

    function changeName (e) {
        setTextName(e.target.value);
   }

   function changeDate () {
    setDate(value);
    // console.log(date);
}

    const handleClose = () => {
      var ar2 = ar;
      

      onClose();
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  

    const [value, setValue] = React.useState(dayjs({date}));

    const handleChange = (newValue) => {
        changeDate();
      setValue(newValue);
    };

    return (
      <Dialog onClose={handleClose} open={open} >
        <DialogTitle>Add Big Task</DialogTitle>

<div className='DialogStruc'>
        <Input placeholder='Name' onChange={changeName}> </Input>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Due Date"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>

        <Input placeholder='Things to do' onChange={changeThings}> </Input>
</div>        
         <Button onClick={handleClose}> Add </Button>

      </Dialog>
    );
  }
  
//   SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
//   };



const ar = [{id: 1, task: "Duschen", duration:  "12Tage"}, {id: 2, task:"Waschen", duration: "39Tage"}] ;
const lowerTasks = [{id: 1, task1: 'einseifen', task2:'', task3: ''}, {id: 2, task1: 'Sammeln', task2:'Waschen', task3: 'Aufsammeln'}]


function BigTasks() {

    
    

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
                  <b>  {index.duration} </b>
                  <b>{lowerAr.at(index.id -1).task1} </b>
                  <b>{lowerAr.at(index.id -1).task2} </b>
                  <b>{lowerAr.at(index.id -1).task3} </b>

                  

                </div>
              </div>
              

            </div>
            <div className='spacer'> </div>
            </div>
          );
        })}

     <AddCircleOutlineSharpIcon className='CircleAdd' onClick={handleClickOpen}/>   
     <CustomDialog
        open={open}
        onClose={handleClose}
        className='Dialgo'
      />

    </div>
    
    </>
  )
}

export default BigTasks
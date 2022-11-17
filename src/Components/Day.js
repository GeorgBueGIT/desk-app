import React from 'react'
import { useState } from 'react'
import "../Styles/Kalender.css";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

function Day() {

    function CustomDialog(props) {

        const { onClose, open } = props;
    
        const handleClose = () => {
          onClose();
        };
    
        const [value, setValue] = React.useState();
    
    
        return (
          <Dialog onClose={handleClose} open={open} >
            <DialogTitle>Add Big Task</DialogTitle>
    
            <Button> Add </Button>
    
          </Dialog>
        );
      }

     const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
      };

      




return (
<>
    <div className='dayFlex'>
{Array.from({ length: 24 }, (_, i) => <div key={i} className='hours' onClick={handleClickOpen}></div>)}

    </div>

    <CustomDialog
    open={open}
    onClose={handleClose}
    className='Dialgo'
  />

</>

)
}

export default Day
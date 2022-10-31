import React from 'react';
import Input from '@mui/material/Input';
import '../Styles/Login.css';
import Button from '@mui/material/Button';

function Login() {

// const [disabled, setDisabled] = useState(false); 

//     const change =(e) => {
//         Button.disabled = false;
//       }

  return (
    <>
    <div className="div">
    <Input placeholder="Username" inputProps={"Username"}  />
    <Input placeholder="Password" inputProps={"Password"}  />
    <Button variant="contained" onClick={{}}>
        Login
    </Button>
    </div>
    </>
  )
}

export default Login
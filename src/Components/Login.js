import React from 'react';
import Input from '@mui/material/Input';
import '../Styles/Login.css';
import Button from '@mui/material/Button';
import backgroundVideo from '../Media/Mind.Clear.mp4';
import backgroundVideo2 from '../Media/Backlogin.mp4';
import { yellow } from '@mui/material/colors';

function Login() {

// const [disabled, setDisabled] = useState(false); 

//     const change =(e) => {
//         Button.disabled = false;
//       }

  return (
    <>    
        <div className='bar'>
    <video autoPlay loop muted id='video' height={'80%'} >
      <source src={backgroundVideo} type="video/mp4"/>
    </video>
        </div>

    <div className="div">

    <Input placeholder="Username" inputProps={"Username"}  />
    <Input placeholder="Password" inputProps={"Password"}  />
    <div style={{height:'60px'}}></div>
    <Button variant="contained" onClick={{}}>
        Login
    </Button>
    </div>     
    
    <div className='backvid'>
    <video autoPlay loop muted id='video2' width={'100%'} height={'80%'}>
      <source src={backgroundVideo2} type="video/mp4"/>
    </video>
      </div>
    </>
  )
}

export default Login
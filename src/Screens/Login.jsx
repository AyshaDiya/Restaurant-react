import {TextField, Typography,Button} from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    var[data,setData] = useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
  return (
    <div   align='center'>
        <br /><br /><br /><br />

        <h1>LOGIN</h1>
        <br /><br />
        <TextField variant='outlined' label='UserName' name='fname' align='centre' onchange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='outlined'label='PassWord' name='Description'onchange={inputHandler}/>&nbsp;
        <br /><br />
        

        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Login
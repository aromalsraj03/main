import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className = 'Login'>
      <div className = 'LoginForm'>
        <Typography
         variant = 'h4'
         style = {{fontFamily : 'Segoe UI', color : "brown", fontWeight : "bold"}}
        >
          LOGIN
        </Typography>
        <br></br>
        <TextField
         id = "email"
         label = "email"
         variant = "outlined"
         style = {{ outlineColor: 'white' }}
        />
        <br></br><br></br>
        <TextField
         id = "password"
         type="password"
         label = "password"
         variant = "outlined"
       />
       <br></br><br></br>
       <Button
        variant = 'outlined'
        color = 'inherit'
        style = {{margin: "0px 3px 0px 10px", fontSize: "14px", color: "red"}}
      >
        Login
      </Button>
      <br></br>
      <Button
        variant = 'outlined'
        color = 'inherit'
        style = {{margin: "10px 3px 0px 10px", fontSize: "14px", color: "red"}}
      >
        <Link to='/Signup' style={{ textDecoration: 'none', color: "red" }} >
          Sign Up
       </Link>
      </Button>
     </div>
    </div>
  )
}

export default Login
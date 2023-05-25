import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Adminlogin = () => {
  return (
    <div className = 'Login'>
      <div className = 'LoginForm'>
        <Typography
         variant = 'h4'
         style = {{fontFamily : 'Segoe UI', color : "brown", fontWeight : "bold"}}
        >
          ADMIN LOGIN
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
     </div>
    </div>
  )
}

export default Adminlogin
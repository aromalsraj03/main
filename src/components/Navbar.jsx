import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from "../images/blood_drop_icon(50x50px).png";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar
      position="static"
      style={{backgroundColor: "white"}}
      >
        <Toolbar>
          <img
           src={logo}
           height={50}
           alt='logo'
          />
          <Typography
           variant="h5"
           component="div"
           sx={{ flexGrow: 1 }}
           style={{color: "red"}}
          >
            Blood Bank
            <Button
             variant='outlined'
             color='inherit'
             style={{ margin: "0px 3px 0px 10px", fontSize: "14px", color: "red" }}
            >
              <Link
              to='/'
              style={{ textDecoration: 'none', color: "red"  }}
              >
                Home
              </Link>
            </Button>
          </Typography>
          
          <Button
           variant='outlined'
           color='inherit'
           style={{ margin: "0px 3px 0px 10px", fontSize: "14px", color: "red" }}
          >
            <Link
             to='/Login'
             style={{ textDecoration: 'none', color: "red" }}
            >
              Login | Sign Up
            </Link>
          </Button>
          {/*<Button
           variant='outlined'
           color='inherit'
           style={{ margin: "0px 3px 0px 10px", fontSize: "14px", color: "red" }}
          >
            <Link to='/Adminlogin'
             style={{ textDecoration: 'none', color: "red" }}
            >
              Admin
            </Link>
  </Button>*/}
        </Toolbar>
      </AppBar>
        </Box>
    </div>
  )
}

export default Navbar
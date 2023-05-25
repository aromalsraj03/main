import { AppBar, Box, Button, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/blood_drop_icon(50x50px).png';

const drawerWidth = 240;

const Sidebar = () => {
  return (
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
            Dashboard
          </Typography>
          
          <Button
           variant='outlined'
           color='inherit'
           style={{ margin: "0px 3px 0px 10px", fontSize: "14px", color: "red" }}
          >
            <Link
             to='/Donarlist'
             style={{ textDecoration: 'none', color: "red" }}
            >
              Donar List
            </Link>
          </Button>
          <Button
           variant='outlined'
           color='inherit'
           style={{ margin: "0px 3px 0px 10px", fontSize: "14px", color: "red" }}
          >
            <Link to='/Requestform'
             style={{ textDecoration: 'none', color: "red" }}
            >
              Request
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
        </Box>
  )
}

export default Sidebar
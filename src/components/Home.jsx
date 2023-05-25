import './Home.css';
import { Button, Typography } from '@mui/material'
import React from 'react'
import bg from '../images/blood_drive.jpg'
import dbg from '../images/blood_list.jpg'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(BloodType, Donate, Recieve) {
  return { BloodType, Donate, Recieve };
}

const rows = [
  createData('A+', 'A+ AB+',	'A+ A- O+ O-'),
  createData('O+', 'O+ A+ B+ AB+',	'O+ O-'),
  createData('B+', 'B+ AB+',	'B+ B- O+ O-'),
  createData('AB+', 'AB+',	'Everyone'),
  createData('A-', 'A+ A- AB+ AB-',	'A- O-'),
  createData('O-', 'Everyone',	'O-'),
  createData('B-', 'B+ B- AB+ AB-',	'B- O-'),
  createData('AB-', 'AB+ AB-',	'AB- A- B- O-')
];


const Home = () => {
  return (
    <div className = 'Home'>
      <div class = 'Promotion'>
        <div class = "image">
          <img src = {bg}></img>
        </div>
        <div class = "text">
          <h1>
            Once a blood donor, always a lifesaver.
          </h1>
          <Button
          variant = "contained"
          color = 'error'
          >
            <Link to = '/Login' style={{ textDecoration : 'none', color : "white" }} >
              Donate
            </Link>
          </Button>
        </div>
      </div>
      <div className='DonationBox'>
        <h1>KNOW YOUR DONARS</h1>
        <div className='Donation'>
          <img className='dbg' src={dbg}></img>
          <TableContainer style={{margin: "15px", borderRadius: "10px" }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">BLOOD TYPE</StyledTableCell>
                <StyledTableCell align="center">DONATE TO BLOOD</StyledTableCell>
                <StyledTableCell align="center">RECIEVE TO BLOOD</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.BloodType}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.BloodType}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.Donate}</StyledTableCell>
                  <StyledTableCell align="center">{row.Recieve}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
          </div>
      </div>
    </div>
  )
}

export default Home
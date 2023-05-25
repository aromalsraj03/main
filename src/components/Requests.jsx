import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './Donarlist.css';
import { Button, Snackbar } from '@mui/material';
import axios from 'axios';

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

const Requests = () => {
  const [receivers, setReceivers] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    fetchReceivers();
  }, []);

  const fetchReceivers = async () => {
    try {
      const response = await axios.get('http://localhost:15000/acc/receiver');
      setReceivers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id, email) => {
    try {
      await axios.post('http://localhost:15000/acc/delete', { _id: id });
      fetchReceivers();
      console.log('Blood request deleted successfully');

      // Send email to the user (handled on the backend)

      // Display confirmation message to the user
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAccept = async (id, email) => {
    try {
      await axios.post('http://localhost:15000/acc/accept', { _id: id, email });
      fetchReceivers();
      console.log('Blood request accepted successfully');

      // Send email to the user (handled on the backend)

      // Display confirmation message to the user
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className='Donation'>
      <TableContainer style={{ margin: '15px', borderRadius: '10px' }} component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>NAME</StyledTableCell>
              <StyledTableCell align='center'>BLOOD GROUP</StyledTableCell>
              <StyledTableCell align='center'>EMAIL</StyledTableCell>
              <StyledTableCell align='center'>MOBILE NUMBER</StyledTableCell>
              <StyledTableCell align='center'>ACCEPT</StyledTableCell>
              <StyledTableCell align='center'>DECLINE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {receivers.map((receiver, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component='th' scope='row' align='center'>
                  {receiver.name}
                </StyledTableCell>
                <StyledTableCell align='center'>{receiver.bloodGroup}</StyledTableCell>
                <StyledTableCell align='center'>{receiver.email}</StyledTableCell>
                <StyledTableCell align='center'>{receiver.phone}</StyledTableCell>
                <StyledTableCell align='center'>
                  <Button variant='outlined' color='error'>
                    Accept
                  </Button>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <Button
                    variant='contained'
                    color='error'
                    onClick={() => handleDelete(receiver._id, receiver.email)}
                  >
                    Decline
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Snackbar for displaying confirmation message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Your request has been declined."
      />
    </div>
  );
};

export default Requests;

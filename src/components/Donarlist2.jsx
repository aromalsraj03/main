import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
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

const Donarlist2 = () => {
  const [donors, setDonors] = useState([]);

  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedBloodGroup, setUpdatedBloodGroup] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('http://localhost:15000/acc/donors'); // Make API request to fetch donors
      setDonors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post('http://localhost:15000/acc/deletes', { _id: id });
      fetchDonors(); // Fetch donors again to update the list after deletion
      console.log('Blood request deleted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateDialogOpen = (donor) => {
    setSelectedDonor(donor);
    setUpdatedName(donor.name);
    setUpdatedBloodGroup(donor.bloodGroup);
    setUpdatedEmail(donor.email);
    setUpdatedPhone(donor.phone);
    setOpenUpdateDialog(true);
  };

  const handleUpdateDialogClose = () => {
    setOpenUpdateDialog(false);
  };

  const handleUpdate = async () => {
    try {
      const updatedDonor = {
        _id: selectedDonor._id,
        name: updatedName,
        bloodGroup: updatedBloodGroup,
        email: updatedEmail,
        phone: updatedPhone
      };

      await axios.post('http://localhost:15000/acc/update', updatedDonor);
      setOpenUpdateDialog(false);
      fetchDonors(); // Fetch donors again to update the list after update
      console.log('Blood donor updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Donation'>
      <TableContainer style={{ margin: '15px', borderRadius: '10px' }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">NAME</StyledTableCell>
              <StyledTableCell align="center">BLOOD GROUP</StyledTableCell>
              <StyledTableCell align="center">EMAIL</StyledTableCell>
              <StyledTableCell align="center">MOBILE NUMBER</StyledTableCell>
              <StyledTableCell align="center">UPDATE</StyledTableCell>
              <StyledTableCell align="center">DELETE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donors.map((donor) => (
              <StyledTableRow key={donor._id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {donor.name}
                </StyledTableCell>
                <StyledTableCell align="center">{donor.bloodGroup}</StyledTableCell>
                <StyledTableCell align="center">{donor.email}</StyledTableCell>
                <StyledTableCell align="center">{donor.phone}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="outlined" color="primary" onClick={() => handleUpdateDialogOpen(donor)}>Update</Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="contained" color="error" onClick={() => handleDelete(donor._id)}>Delete</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openUpdateDialog} onClose={handleUpdateDialogClose}>
        <DialogTitle align='center'>Update Donor</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            fullWidth
          />
          <br></br><br></br>
          <TextField
            label="Blood Group"
            value={updatedBloodGroup}
            onChange={(e) => setUpdatedBloodGroup(e.target.value)}
            fullWidth
          />
          <br></br><br></br>
          <TextField
            label="Email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            fullWidth
          />
          <br></br><br></br>
          <TextField
            label="Mobile Number"
            value={updatedPhone}
            onChange={(e) => setUpdatedPhone(e.target.value)}
            fullWidth
          />
          <br></br><br></br>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Donarlist2;

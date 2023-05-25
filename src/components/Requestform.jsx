import React, { useState } from 'react';
import { TextField, Button, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Select, MenuItem, InputLabel, Snackbar } from '@mui/material';
import axios from 'axios';

const RequestForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [purpose, setPurpose] = useState('');
  const [bloodUnitsRequired, setBloodUnitsRequired] = useState('');
  const [ailments, setAilments] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:15000/acc/request', {
        name,
        age: parseInt(age),
        email,
        phone,
        bloodGroup,
        purpose,
        bloodUnitsRequired: purpose === 'receiver' ? parseInt(bloodUnitsRequired) : undefined,
        ailments: purpose === 'receiver' ? ailments : undefined,
      });

      setSnackbarMessage('Registration added successfully');
      setSnackbarOpen(true);
      resetForm();
    } catch (error) {
      console.error('Error submitting request:', error);
      setSnackbarMessage('Failed to submit request');
      setSnackbarOpen(true);
    }
  };

  const resetForm = () => {
    setName('');
    setAge('');
    setEmail('');
    setPhone('');
    setBloodGroup('');
    setPurpose('');
    setBloodUnitsRequired('');
    setAilments('');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth margin="normal" />
        <TextField label="Age" value={age} onChange={(e) => setAge(e.target.value)} type="number" required fullWidth margin="normal" />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth margin="normal" />
        <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required fullWidth margin="normal" />
        <TextField label="Ailments" value={ailments} onChange={(e) => setAilments(e.target.value)} fullWidth margin="normal" />
        
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Blood Group</FormLabel>
          <RadioGroup row value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
            <FormControlLabel value="A+" control={<Radio />} label="A+" />
            <FormControlLabel value="B+" control={<Radio />} label="B+" />
            <FormControlLabel value="AB+" control={<Radio />} label="AB+" />
            <FormControlLabel value="O+" control={<Radio />} label="O+" />
            <FormControlLabel value="A-" control={<Radio />} label="A-" />
            <FormControlLabel value="B-" control={<Radio />} label="B-" />
            <FormControlLabel value="AB-" control={<Radio />} label="AB-" />
            <FormControlLabel value="O-" control={<Radio />} label="O-" />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Purpose</InputLabel>
          <Select value={purpose} onChange={(e) => setPurpose(e.target.value)} required>
            <MenuItem value="Donor">Donor</MenuItem>
            <MenuItem value="Receiver">Receiver</MenuItem>
          </Select>
        </FormControl>

        {purpose === 'Receiver' && (
          <>
            <TextField
              label="Blood Units Required"
              value={bloodUnitsRequired}
              onChange={(e) => setBloodUnitsRequired(e.target.value)}
              type="number"
              fullWidth
              margin="normal"
            />
 
          </>
        )}

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>

      {/* Snackbar for displaying confirmation/error message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default RequestForm;

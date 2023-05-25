import './Signup.css'
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [result, setResult] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:15000/acc/signup', data);
      console.log(response.data);
      alert('Registration completed');
      setResult(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('Email already exists in the database');
      } else {
        alert('An error occurred during registration');
      }
    }
  };

  return (
    <div className='Signup'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          id='name'
          label='Name'
          variant='outlined'
          {...register('name', { required: 'Name is required.' })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
          style={{ margin: '0px 5px 0px 10px' }}
        />
        <TextField
          required
          id='email'
          label='Email'
          variant='outlined'
          {...register('email', { required: 'Email is required.' })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          style={{ margin: '0px 5px 0px 1px' }}
        />
        <TextField
          required
          id='phoneNumber'
          label='Phone Number'
          variant='outlined'
          {...register('phoneNumber', { required: 'Phone number is required.' })}
          error={Boolean(errors.phoneNumber)}
          helperText={errors.phoneNumber?.message}
        />
        <br /><br />
        <TextField
          required
          id='password'
          label='Password'
          type='password'
          variant='outlined'
          {...register('password', { required: 'Password is required.' })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          style={{ margin: '0px 5px 0px 10px' }}
        />
        <TextField
          required
          id='re_password'
          label='Re-enter Password'
          type='password'
          variant='outlined'
          {...register('re_password', {
            required: 'Re-enter Password is required.',
            validate: (value) => value === watch('password') || 'Passwords do not match'
          })}
          error={Boolean(errors.re_password)}
          helperText={errors.re_password?.message}
        />
        <br /><br />
        <Button variant='contained' color='error' type='submit' className='btns'>
          Create New Account
        </Button>
      </form>
    </div>
  );
};

export default Signup;

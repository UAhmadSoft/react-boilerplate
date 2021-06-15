import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

import image from 'assets/five-removebg-preview.png';
// import image from 'Assets/one-removebg-preview.png';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_BASE_URL } from 'utils/constants';

function Register(props) {
  const { classes } = props;
  const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const [state, setState] = useState(initialState);

  const handleRegTxtChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const resetState = () => setState(initialState);

  const handleSubmit = async (e) => {
    console.log('Form Submitted');
    e.preventDefault();
    console.log(`state`, state);

    if (state.password !== state.passwordConfirm) {
      toast.error('Passwords NOT matched');
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/signUp`, {
        ...state,
      });
      console.log(`res`, res);
      toast.success('Signup Succesfull');
      toast.success(
        `Verify your Email By Activation Link Send to your email ${state.email}`
      );
      resetState();
    } catch (err) {
      let msg = 'Something Went Wrong';
      if (err.response && err.response.data)
        msg = err.response.data.message;

      toast.error(msg);
    }
  };

  return (
    <div className={`${classes.user} ${classes.signupBx}`}>
      <div className={classes.formBx}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form onSubmit={handleSubmit}>
          <h2>Create an account</h2>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={state.name}
            onChange={handleRegTxtChange}
            autoComplete='false'
          />
          <input
            onChange={handleRegTxtChange}
            type='email'
            name='email'
            placeholder='Email Address'
            value={state.email}
            autoComplete='false'
          />
          <input
            onChange={handleRegTxtChange}
            type='password'
            name='password'
            placeholder='Create Password'
            value={state.password}
            autoComplete='false'
          />
          <input
            onChange={handleRegTxtChange}
            type='password'
            name='passwordConfirm'
            value={state.passwordConfirm}
            placeholder='Confirm Password'
            autoComplete='false'
          />
          <input type='submit' name='' value='Sign Up' />
          <p className={classes.link}>
            Already have an account ?
            <a name='login' onClick={props.handleChange}>
              Sign In
            </a>
          </p>
        </form>
      </div>
      <div className={classes.imgBx}>
        <img src={image} alt='' />
      </div>
    </div>
  );
}

export default withStyles(styles)(Register);

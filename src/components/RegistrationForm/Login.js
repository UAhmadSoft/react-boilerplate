import React, { useContext, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import styles from './style';
// import image from 'Assets/one-removebg-preview.png';
import image from 'assets/five-removebg-preview.png';

import { toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from 'contexts/AuthContext';
import { API_BASE_URL } from 'utils/constants';

const Login = (props) => {
  const initialState = {
    email: '',
    password: '',
  };

  const [logState, setLogState] = useState(initialState);
  const { signInUser } = useContext(AuthContext);

  const handleTxtChange = (e) => {
    setLogState({
      ...logState,
      [e.target.name]: e.target.value,
    });
  };

  const resetState = () => setLogState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`logState`, logState);

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        ...logState,
      });
      console.log(`res`, res);
      resetState();
      toast.success('Login Successfull');

      signInUser(res.data.token, res.data.user);
    } catch (err) {
      console.log(`err`, err);
      let msg = 'Something Went Wrong';
      if (err.response && err.response.data)
        msg = err.response.data.message;

      toast.error(msg);
    }
  };

  const { classes } = props;
  return (
    <div className={`${classes.user} ${classes.signinBx}`}>
      <div className={classes.imgBx}>
        <img src={image} alt='Signin' />
      </div>
      <div className={classes.formBx}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input
            value={logState.email}
            onChange={handleTxtChange}
            type='text'
            name='email'
            placeholder='Username'
            autoComplete='false'
          />
          <input
            value={logState.password}
            onChange={handleTxtChange}
            type='password'
            name='password'
            placeholder='Password'
            autoComplete='false'
          />
          <input type='submit' name='' value='Login' />

          <p className={classes.link}>
            Don't have an account ?
            <a type='button' name='Reg' onClick={props.handleChange}>
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(Login);

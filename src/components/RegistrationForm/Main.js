import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Login from './Login';
import Signup from './SignUp';

function Main(props) {
  const { classes } = props;
  const [toggleForm, setToggleForm] = useState('login');
  const handleChange = (e) => {
    console.log(`e.target`, e.target);
    console.log(`e.target.name`, e.target.name);
    setToggleForm(e.target.name);
  };

  return (
    <div className={classes.root}>
      <section className={classes.sectionReg}>
        <div className={`${classes.containerReg}`}>
          {toggleForm === 'login' ? (
            <Login handleChange={handleChange} />
          ) : (
            <Signup handleChange={handleChange} />
          )}
        </div>
      </section>
    </div>
  );
}

export default withStyles(styles)(Main);

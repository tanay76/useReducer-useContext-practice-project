import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, Typography } from '@material-ui/core';
import { ClickOpenButton } from './LoginModal';
import LoginModal from './LoginModal';



export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function clickOpenHandler() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <form className={classes.loginForm} noValidate autoComplete="off">
          <Typography variant='h5' color='primary' style={{marginBottom: '1rem', textAlign: 'center'}}>LOGIN</Typography>
          <TextField label="Email" type='text' variant="outlined" color='primary' className={classes.textField} />
          <TextField label="Password" type='password' variant="outlined" color='primary' className={classes.textField} />
          <Button variant="contained" color="primary" style={{maxWidth: '80px', alignSelf: 'center'}}>
            Submit
          </Button>
        </form>
      </Paper>
      {!open && <ClickOpenButton onClickOpen={clickOpenHandler} />}
      {open && (
        <LoginModal
          open={open}
          title="Alert:"
          message="Form not filled properly"
          onClose={handleClose}
          error={true}
        />
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(64),
      marginTop: '10em',
      padding: '2rem',
    },
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      width: '100%',
    },
  },
  textField: {
    marginBottom: '1rem'
  }
}));

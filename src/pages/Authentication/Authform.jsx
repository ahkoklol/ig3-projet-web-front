import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 400,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const AuthForm = ({ isSignUp }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: implement authentication logic here
    navigate('/dashboard');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" component="h1" gutterBottom>
          {isSignUp ? 'Sign Up' : 'Log In'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                {isSignUp ? 'Sign Up' : 'Log In'}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="body2" gutterBottom>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <Link onClick={() => navigate(isSignUp ? '/login' : '/signup')}>
            {isSignUp ? 'Log In' : 'Sign Up'}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default AuthForm;
import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Lala le chat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  

  const [firstNameReg, setFirstNameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [lastNameReg, setLastNameReg] = useState('');

  const navigate = useNavigate();

  const register = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/user/register`, {
      firstName: firstNameReg, password: passwordReg, email: emailReg, lastName: lastNameReg
    }).then((response) => {
      if(response.status === 201){
        console.log("User created")
        toast.success("Welcome to the family !")
        // Create a userAddress for the new user
      axios.post(`${process.env.REACT_APP_API_URL}/userAddress`, {
        userID: response.data.newUser.idUser,
      }).then((addressResponse) => {
        console.log("User address created", addressResponse.data);
        navigate('/home');
      }).catch((error) => {
        console.error("Failed to create user address", error);
        toast.error("Something went wrong when creating your account");
      });
      } else if(response.status === 409){
        console.log("User already exists")
        toast.error("This email is already used")
      } else if(response.status === 406){
        console.log("Invalid email")
        toast.error("This email is invalid")
      }
      else {
        console.log("User not created")
        toast.error("Something went wrong when creating your account")
      }
      console.log(response);
    });
  };

  const handleFirstNameChange = (event) => {
    setFirstNameReg(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastNameReg(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailReg(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordReg(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{marginBottom: '50px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 22 ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstNameReg}
                  onChange={handleFirstNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastNameReg}
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={emailReg}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={passwordReg}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              style={{ backgroundColor: 'black', color: 'white', textTransform:'none' }}
              noValidate onClick={register}
              href="/home"
            >
              Sign Up
              
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" style={{ color: '#d3003f', textDecorationColor: '#d3003f' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
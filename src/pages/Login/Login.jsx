import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { SessionContext } from '../../context/sessionContext';
import { toast } from 'react-hot-toast';
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
import jwt_decode from 'jwt-decode';

function SignIn() {
  const { updateSessionID } = useContext(SessionContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orderDetailsID, setOrderDetailsID] = useState('');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      const userID = decodedToken.idUser;
      updateSessionID(decodedToken.sessionID);
      setIsLoggedIn(true);
      createOrderDetails(userID); // Call the function to create order details
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    login();
  };

  const login = () => {
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/login`, {
          password: password,
          email: email,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log('Login successful');
            const token = response.data.token;
            const decodedToken = jwt_decode(token);
            const userID = decodedToken.idUser;
            updateSessionID(response.data.sessionID);
            localStorage.setItem('token', token);
            toast.success('Welcome back ' + email + ' !');
            createShoppingSession(userID);
            setIsLoggedIn(true);
          } else {
            console.log('Login failed');
            toast.error('Something went wrong when logging in');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const createShoppingSession = async (userID) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/shoppingSession`, {
        userID: userID,
        total: 0,
      });

      if (response.status === 201) {
        console.log('Shopping session created successfully');
        // Handle the successful creation of the shopping session
        createOrderDetails(userID); // Call the function to create order details
      } else {
        console.log('Error creating shopping session');
        // Handle the error case
      }
    } catch (error) {
      console.error('Error creating shopping session:', error);
      // Handle the error case
    }
  };

  const createOrderDetails = async (userID) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/orderDetails`, {
        userID: userID,
        price: 0,
      });

      if (response.status === 201) {
        console.log('Order details created successfully');
        setOrderDetailsID(response.data.OrderDetailsID);
        // Handle the successful creation of order details
      } else {
        console.log('Error creating order details');
        // Handle the error case
      }
    } catch (error) {
      console.error('Error creating order details:', error);
      // Handle the error case
    }
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
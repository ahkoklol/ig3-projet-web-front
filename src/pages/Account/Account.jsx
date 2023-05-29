import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Account = () => {
  const [userInformation, setUserInformation] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const userIdResponse = await axios.get('/user/:id'); // Replace with the appropriate endpoint to fetch the user ID
        const userId = userIdResponse.data.id;

        const response = await axios.get(`/userAddress/${userId}`);
        if (response.data) {
          setUserInformation(response.data);
        } else {
          // If userAddress doesn't exist, create an empty one
          await axios.post(`/userAddress`, { userId }); // Replace with the appropriate endpoint to create an empty userAddress
          setUserInformation({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            postalCode: '',
            city: '',
            country: '',
          });
        }

        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInformation();
  }, []);

  const handleSubmit = async () => {
    try {
      const userIdResponse = await axios.get('/user/:id'); // Replace with the appropriate endpoint to fetch the user ID
      const userId = userIdResponse.data.id;
      await axios.put(`/userAddress/${userId}`, userInformation);
      toast.success('User information updated successfully!');
    } catch (error) {
      console.error('Error updating user information:', error);
      toast.error('An error occurred while updating user information.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '200px', marginBottom: '50px' }}>
      {isLoggedIn ? (
        <>
          <Typography variant="h4" align="center" sx={{ my: 4 }}>
            Account Information
            <div style={{ display: 'inline-block', marginLeft: '10px' }}>
              <Avatar sx={{ bgcolor: green[500] }}>C</Avatar>
              <Avatar sx={{ bgcolor: 'red' }}>C</Avatar>
              <Button
                  type="submit"
                  fullWidth
                  href="/edit"
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                  style={{ backgroundColor: 'rgb(250, 128, 114)', color: 'white', textTransform: 'none' }}
                >
                  Superadmin page
                </Button>
            </div>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                value={userInformation.firstName}
                onChange={(event) =>
                  setUserInformation((prevState) => ({
                    ...prevState,
                    firstName: event.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                value={userInformation.lastName}
                onChange={(event) =>
                  setUserInformation((prevState) => ({
                    ...prevState,
                    lastName: event.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                fullWidth
                value={userInformation.phoneNumber}
                onChange={(event) =>
                  setUserInformation((prevState) => ({
                    ...prevState,
                    phoneNumber: event.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                value={userInformation.address}
                onChange={(event) =>
                  setUserInformation((prevState) => ({
                    ...prevState,
                    address: event.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Postal Code"
                fullWidth
                value={userInformation.postalCode}
                onChange={(event) =>
                  setUserInformation((prevState) => ({
                    ...prevState,
                    postalCode: event.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                fullWidth
                value={userInformation.city}
                onChange={(event) =>
                  setUserInformation((prevState) => ({
                    ...prevState,
                    city: event.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Country"
                fullWidth
                value={userInformation.country}
                onChange={(event) =>
                  setUserInformation((prevState) => ({
                    ...prevState,
                    country: event.target.value,
                  }))
                }
              />
            </Grid>
            <Button
                  type="submit"
                  fullWidth
                  href="/"
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                  style={{ backgroundColor: 'black', color: 'white', textTransform: 'none' }}
                >
                  Save changes
                </Button>
          </Grid>
        </>
      ) : (
        <Typography variant="h4" align="center" sx={{ my: 4 }}>
          Please log in to view your account information.
        </Typography>
      )}
    </Container>
  );
};

export default Account;
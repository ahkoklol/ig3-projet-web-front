import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Account = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: '200px', marginBottom: '50px' }}>
      <Typography variant="h4" align="center" sx={{ my: 4 }}>
        Account Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Phone Number" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Postal Code" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Country" fullWidth />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ mt: 4 }}>
        Save Changes
      </Button>
    </Container>
  );
};

export default Account;
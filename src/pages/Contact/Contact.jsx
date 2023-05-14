import React from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent!');
  };

  return (
    <div style={{ padding: '200px 16px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: '24px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} >
            <TextField required label="First Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required label="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField required label="Email" fullWidth />
          </Grid>
          <Grid item xs={12} >
            <TextField required label="Message" multiline rows={4} fullWidth />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '24px' }}>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ backgroundColor: 'black', textTransform:'none' }}>
              Send 
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
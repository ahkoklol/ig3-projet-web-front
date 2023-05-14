import React from 'react';
import { Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '800px' }}>
        <Typography variant="h4" component="h1">
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lectus auctor, efficitur risus vitae, eleifend lectus. Proin venenatis, risus eu efficitur dictum, elit felis feugiat lacus, sed eleifend eros odio eget libero. In convallis arcu quis efficitur efficitur. Maecenas commodo diam eu nisi consequat, vel egestas odio lobortis. Mauris dapibus sapien ac erat elementum, ut auctor ipsum efficitur. Etiam non ultricies nulla, non bibendum velit. Nunc ornare lorem eu arcu malesuada suscipit. Sed cursus auctor arcu a pharetra. Duis maximus nunc sit amet bibendum finibus. Nulla facilisi. Donec aliquam malesuada risus. Vestibulum volutpat est vel euismod facilisis. Integer eget tellus in felis tincidunt hendrerit.
        </Typography>
      </div>
    </div>
  );
};

export default AboutUs;
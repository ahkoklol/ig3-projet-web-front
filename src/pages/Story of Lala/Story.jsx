import React from 'react';
import { Typography } from '@mui/material';

import picture from '../../assets/330149465_1237468666900239_6977449016741945736_n.jpg';

const Story = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '50px' }}>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '800px' }}>
        <img
          src={picture}
          alt="Story image"
          style={{ width: '50%', marginRight: '4rem' }}
        />
        <div style={{ flex: '1' }}>
          <Typography variant="h4" component="h2" style={{ marginBottom: '16px' }}>
            Who is Lala?
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'justify' }}>
            Lala is the little cat that one of our team members met when moving into their new residence in 2022, a very cozy mansion in the South of France. As I was carrying my suitcases up the stairs, this little cat was there to bump into me. From my first days in the mansion, when I had no friends yet in this new town, Lala was there to keep me company. Later on, I discovered that Lala had already been around for a while, and that her owner was the former occupant of my room. That's probably why Lala quickly became attached to me. A strong friendship immediately formed between us, although Lala is quite shy and hates being touched. Since then, her presence fills the void I felt being away from my family.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Story;
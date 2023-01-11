import React from 'react';
import { Grid, Typography } from '@mui/material';
import logo from '../assets/img/logo.png';

export default function Header() {
  return (
    <section className="header">
      <Grid
        container
        sx={{ marginTop: '1rem', marginBottom: '1rem' }}
        alignItems={'center'}
        justifyContent="center"
      >
        <Grid item lg={4} sm={4} sx={{ width: '50px', height: '50px' }}>
          <img
            src={logo}
            alt="garrasi logo"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
        <Grid
          item
          lg={8}
          sm={8}
          sx={{
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-5px',
          }}
        >
          <Typography variant="h5" component="h2" sx={{ color: '#fff' }}>
            Garrasi
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

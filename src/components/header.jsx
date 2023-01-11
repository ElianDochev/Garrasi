import React from 'react';
import { Grid, Typography } from '@mui/material';
import logo from '../assets/img/logo.svg';

export default function Header() {
  return (
    <section className="header">
      <Grid container sx={{ marginTop: '1rem' }} alignItems={'center'}>
        <Grid item lg={4} sm={4} sx={{ width: '80px', height: '80px' }}>
          <img src={logo} alt="garrasi logo" />
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
            marginTop: '-20px',
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

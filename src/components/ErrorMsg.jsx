import React from 'react';
import '../pages/Popup/Popup.css';
import logo from '../assets/img/logo.svg';
import { Box, Grid, Typography, Container, Button } from '@mui/material';

function ErrorMsg(props) {
  const { msg, isAuthed, ChangeIsAuthed } = props;
  return (
    <div className="App">
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
      <section className="content">
        <Grid container alignItems="center" justifyContent={'center'} sx={{}}>
          <Grid item lg={12} sm={12} sx={{ marginTop: '2rem' }}>
            <Typography variant="h5" component="h1" sx={{ color: '#fff' }}>
              {msg}
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} sx={{ m: 1, mt: 5, width: '90%' }}>
            <Container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                rowGap: '1rem',
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: '#2f7', width: '100%', color: '#fff' }}
                onClick={() => ChangeIsAuthed('pending')}
              >
                Try agian
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: '#2f7', width: '100%', color: '#fff' }}
                onClick={() => ChangeIsAuthed('signup')}
              >
                Sign up
              </Button>
            </Container>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default ErrorMsg;

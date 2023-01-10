import React from 'react';
import logo from '../../assets/img/logo.svg';
import bannerImg from '../../assets/img/popup.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import { Container, Typography, Box, Grid, Button } from '@mui/material';

const login = () => {
  console.log('login');
};
const signup = () => {
  console.log('signup');
};

const Popup = () => {
  const User = {
    isAuthed: false,
  };

  if (!User.isAuthed) {
    return (
      <div className="App">
        <section className="header">
          <Grid
            container
            sx={{ marginTop: '1rem' }}
            // justifyContent={'center'}
            alignItems={'center'}
          >
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
            <Grid
              item
              lg={12}
              sm={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                width: '150px',
                height: '150px',
              }}
            >
              <img
                src={bannerImg}
                alt="garrasi logo"
                style={{ width: '100%', height: '100%' }}
              />
            </Grid>
            <Grid item lg={12} sm={12} sx={{ marginTop: '2rem' }}>
              <Typography variant="h5" component="h1" sx={{ color: '#fff' }}>
                Get accurate reviews anywhere, anytime
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
                  // onClick={login}
                  href="https://google.com"
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#c9c9c9',
                    width: '100%',
                    color: '#fff',
                  }}
                  onClick={signup}
                >
                  Sign Up
                </Button>
              </Container>
            </Grid>
          </Grid>
        </section>
      </div>
    );
  } else {
    return (
      <div className="App">
        <section className="header">
          <Grid
            container
            sx={{ marginTop: '1rem' }}
            // justifyContent={'center'}
            alignItems={'center'}
          >
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
      </div>
    );
  }
};

export default Popup;

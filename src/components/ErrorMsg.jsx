import React from 'react';
import '../pages/Popup/Popup.css';
import banner from '../assets/img/popupWrongPassword.svg';
import Header from './header';
import { Box, Grid, Typography, Container, Button } from '@mui/material';

function ErrorMsg(props) {
  const { msg, isAuthed, ChangeIsAuthed } = props;
  return (
    <div className="App">
      <Header />
      <section className="content">
        <Grid container alignItems="center" justifyContent={'center'} sx={{}}>
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              width: '120px',
              height: '120px',
            }}
          >
            <img
              src={banner}
              alt="garrasi logo"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
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

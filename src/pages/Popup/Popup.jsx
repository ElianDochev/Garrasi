import React from 'react';
import logo from '../../assets/img/logo.svg';
import bannerImg from '../../assets/img/popup.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  TextField,
} from '@mui/material';

const signup = () => {
  console.log('signup');
};
// interface User {
//   isAuthed: boolean;
//   ChangeIsAuthed: (isAuthed: boolean) => void;
//   UserData: {
//     name: string,
//   };
// }
const LoginCheckPanel = (props) => {
  const { UserData, login } = props;
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
                onClick={login}
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
};

const LogginPanel = (props) => {
  const { UserData, isAuthed, ChangeIsAuthed } = props;
  const email = React.useRef();
  const password = React.useRef();

  const check = (props) => {
    const { email, password } = props;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (emailValue === '' || passwordValue === '') {
      alert('Please fill all the fields');
    }
    console.log(email + '/' + password);
    if (emailValue === 'yes' && passwordValue === 'yes') {
      ChangeIsAuthed(true);
    } else {
      ChangeIsAuthed(false);
    }
  };
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
        <Grid
          container
          alignItems="center"
          justifyContent={'center'}
          spacing={2}
          sx={{}}
        >
          <Grid item lg={12} sm={12} sx={{ marginTop: '2rem' }}>
            <Typography variant="h4" component="h1" sx={{ color: '#fff' }}>
              Login
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  inputRef={email}
                />
              </Grid>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  inputRef={password}
                />
              </Grid>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#2f7', width: '80%', color: '#fff' }}
                  onClick={() => check({ email, password })}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

const LoggedPanel = (props) => {
  const { UserData, logout } = props;
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
              Hello, {UserData.name}
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
                onClick={logout}
              >
                Logout
              </Button>
            </Container>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

const Popup = () => {
  const [isAuthed, ChangeIsAuthed] = React.useState(false);
  const User = {
    name: 'John Doe',
  };
  const logout = () => {
    ChangeIsAuthed(false);
  };
  const login = () => {
    console.log('login');
    ChangeIsAuthed('pending');
  };
  if (isAuthed === false) {
    return <LoginCheckPanel UserData={User} login={login} />;
  } else if (isAuthed === true) {
    return <LoggedPanel UserData={User} logout={logout} />;
  } else {
    return (
      <LogginPanel
        UserData={User}
        isAuthed={isAuthed}
        ChangeIsAuthed={ChangeIsAuthed}
      />
    );
  }
};

export default Popup;

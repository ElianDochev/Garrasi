import React from 'react';
import bannerImg from '../../assets/img/popupBannerLoginCheck.svg';
import loginImg from '../../assets/img/popupLoginBanner.svg';
import signupImg from '../../assets/img/popupSignupBanner.svg';
import LoggedImg from '../../assets/img/popupLoggedBanner.svg';
import ErrorMsg from '../../components/ErrorMsg';
import Header from '../../components/header';
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

// interface User {
//   isAuthed: boolean;
//   ChangeIsAuthed: (isAuthed: boolean) => void;
//   UserData: {
//     name: string,
//   };
// }
const LoginCheckPanel = (props) => {
  const { UserData, login, signup } = props;
  return (
    <div className="App">
      <Header />
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
      return null;
    }
    console.log(email + '/' + password);
    if (emailValue === 'yes' && passwordValue === 'yes') {
      ChangeIsAuthed(true);
    } else {
      ChangeIsAuthed('wrong password');
    }
  };
  return (
    <div className="App">
      <Header />
      <section className="content">
        <Grid
          container
          alignItems="center"
          justifyContent={'center'}
          spacing={2}
          sx={{}}
        >
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
              width: '150px',
              height: '150px',
            }}
          >
            <img
              src={loginImg}
              alt="garrasi logo"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} sx={{}}>
            <Typography variant="h4" component="h1" sx={{ color: '#fff' }}>
              Login
            </Typography>
          </Grid>
          <Grid item lg={12} xs={12} sm={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  inputRef={email}
                  required
                />
              </Grid>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  inputRef={password}
                  required
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
      <Header />
      <section className="content">
        <Grid
          container
          alignItems="center"
          justifyContent={'center'}
          spacing={2}
          sx={{}}
        >
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
              width: '80px',
              height: '80px',
            }}
          >
            <img
              src={LoggedImg}
              alt="garrasi logo"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item lg={12} sm={12} sx={{}}>
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

const SignUpPanel = (props) => {
  const { UserData, ChangeIsAuthed } = props;
  const email = React.useRef();
  const password = React.useRef();
  const name = React.useRef();

  const register = (props) => {
    const { email, password, name } = props;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current.value;
    if (emailValue === '' || passwordValue === '' || nameValue === '') {
      return null;
    }
    console.log(emailValue + '/' + passwordValue + '/' + nameValue);
  };
  return (
    <div className="App">
      <Header />
      <section className="content">
        <Grid
          container
          alignItems="center"
          justifyContent={'center'}
          spacing={2}
          sx={{}}
        >
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
              width: '80px',
              height: '80px',
            }}
          >
            <img
              src={signupImg}
              alt="garrasi logo"
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item lg={12} sm={12} sx={{}}>
            <Typography variant="h4" component="h1" sx={{ color: '#fff' }}>
              Register Now
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  required
                  inputRef={name}
                />
              </Grid>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  inputRef={email}
                  required
                />
              </Grid>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  required
                  inputRef={password}
                />
              </Grid>
              <Grid item lg={12} sx={{ width: '100%' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#2f7', width: '80%', color: '#fff' }}
                  onClick={() => register({ email, password, name })}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
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
  const signup = () => {
    ChangeIsAuthed('signup');
  };
  const logout = () => {
    ChangeIsAuthed(false);
  };
  const login = () => {
    console.log('login');
    ChangeIsAuthed('pending');
  };
  if (isAuthed === false) {
    return <LoginCheckPanel UserData={User} login={login} signup={signup} />;
  } else if (isAuthed === true) {
    return <LoggedPanel UserData={User} logout={logout} />;
  } else if (isAuthed === 'pending') {
    return (
      <LogginPanel
        UserData={User}
        isAuthed={isAuthed}
        ChangeIsAuthed={ChangeIsAuthed}
      />
    );
  } else if (isAuthed === 'wrong password') {
    return (
      <ErrorMsg
        msg="Wrong password and/or email"
        isAuthed={isAuthed}
        ChangeIsAuthed={ChangeIsAuthed}
      />
    );
  } else if (isAuthed === 'signup') {
    return (
      <SignUpPanel
        UserData={User}
        isAuthed={isAuthed}
        ChangeIsAuthed={ChangeIsAuthed}
      />
    );
  }
};

export default Popup;

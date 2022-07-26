import React, { useState } from 'react';
import { Grid, Container, Button, Paper } from '@mui/material';
import styles from './Auth.module.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { useDispatch } from 'react-redux';
// import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () =>
    setShowPassword(prevShowPassword => !prevShowPassword);

  const handleSubmit = e => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));

      navigate('/')
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup);
    handleShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={styles.paper} elevation={3}>
        <div className={styles.avatar}>
          <LockOutlinedIcon />
        </div>
        <h1>{isSignup ? 'Crie sua conta 👋' : 'Login'}</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="Nome"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Sobrenome"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Senha"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Digite novamente a senha"
                handleChange={handleChange}
                type="password"
              />
            )}
            {/* <Input
              name="ocupation"
              label="Ocupação"
              handleChange={handleChange}
              type="text"
            /> */}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            {isSignup ? 'Cadastrar' : 'Entrar'}
          </Button>
          {/* FIXME => IMPLEMENT NEW GOOGLE AUTENTICATION */}
          {/* <GoogleLogin
            clientId="235121066375-geimdh72qqp756a7v8l1o0i9tgnetlk5.apps.googleusercontent.com"
            render={renderProps => (
              <Button
                className={styles.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Continuar com google
              </Button>
            )}
            onSucess={googleSucess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
          <Grid container className={styles.bottomQuestion}>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? 'Já tem uma conta? Faça Login'
                  : 'Não tem uma conta? Cadastre-se'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

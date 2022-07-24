import React, { useState } from 'react';
import { Grid, Container, Button, Paper } from '@mui/material';
import styles from './Auth.module.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';

const Auth = () => {
  const state = null;
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = () =>
    setShowPassword(prevShowPassword => !prevShowPassword);

  const handleSubmit = () => {};

  const handleChange = () => {};

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
            <Input
              name="ocupation"
              label="Ocupação"
              handleChange={handleChange}
              type="text"
            />
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

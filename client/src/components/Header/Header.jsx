import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link, Navigate, useNavigationType } from 'react-router-dom';

import educaForumLogo from '../../assets/educaforum-logo.png';
import { ClassNames } from '@emotion/react';
import { Typography } from '@mui/material';
import { Avatar } from '../Avatar/Avatar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    navigate('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    // jwt

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={educaForumLogo} alt="Logotipo do EducaFórum" />
      </Link>

      <div className={styles.toolBar}>
        {user ? (
          <div className={styles.profile}>
            <Avatar
              className={styles.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            ></Avatar>
            {user.result.name.chartAt(0)}
            <Typography className={styles.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={styles.logout}
              color="secondary"
              onClick={logout}
            ></Button>
          </div>
        ) : (
          <div className={styles.btnsContainer}>
            <div className={styles.loginBtn}>
              <Link to="/auth">Login</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

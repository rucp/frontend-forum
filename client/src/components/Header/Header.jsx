import styles from './Header.module.css';
import { Link } from 'react-router-dom';

import educaForumLogo from '../../assets/educaforum-logo.png';
import { ClassNames } from '@emotion/react';
import { Typography } from '@mui/material';
import { Avatar } from '../Avatar/Avatar';

export function Header() {
  const user = null; /* mock */

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
              onClick={() => {}}
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

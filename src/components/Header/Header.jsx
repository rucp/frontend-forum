import styles from './Header.module.css';
import { useContext } from 'react';
import { useContextModal } from '../../context/contextCadastro';

import educaForumLogo from '../../assets/images/educaforum-logo.png';

export function Header() {
  const { isLoggedin } = useContext(useContextModal);
  return (
    <header className={styles.header}>
      <img src={educaForumLogo} alt="Logotipo do EducaFórum" />

      <a className={styles.loginBtn} href="/login">
        <div>Login</div>
      </a>
    </header>
  );
}

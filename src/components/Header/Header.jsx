import styles from './Header.module.css';

import educaForumLogo from '../../assets/educaforum-logo.png';
import { useContext } from 'react';
import { useContextModal } from '../../context/contextCadastro';

export function Header() {
  const {isLoggedin} = useContext(useContextModal)
  return (
    <header className={styles.header}>
      <img src={educaForumLogo} alt="Logotipo do EducaFórum" />
      <div className={styles.loginBtn}>
        {isLoggedin ? <a href="/">Sair</a> : <a href="/login">Login</a>}
      </div>
    </header>
  );
}

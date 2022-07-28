import styles from './Header.module.css';

import educaForumLogo from '../../assets/images/educaforum-logo.png';
import { useContext } from 'react';
import { useContextModal } from '../../context/contextCadastro';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export function Header() {
  const { isLoggedin } = useContext(useContextModal);
  return (
    <Router>
      <header className={styles.header}>
        <Link to="/">
          <img src={educaForumLogo} alt="Logotipo do EducaFórum" />
        </Link>

        <div className={styles.loginBtn}>
          {isLoggedin ? <a href="/">Sair</a> : <a href="/login">Login</a>}
        </div>
      </header>
    </Router>
  );
}

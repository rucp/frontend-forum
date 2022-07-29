import styles from './Header.module.css';

import educaForumLogo from '../../assets/images/educaforum-logo.png';
import { useContext } from 'react';
import { useContextModal } from '../../context/contextCadastro';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

export function Header() {
  const { isLoggedin } = useContext(useContextModal);
  return (
    <Router>
      <header className={styles.header}>
        <a href="/">
          <img src={educaForumLogo} alt="Logotipo do EducaFórum" />
        </a>

        <form action="" className={styles.searchBar}>
          <input type="text" placeholder="faça sua busca" name="" />
          <button type="button" className={styles.btnSearch}>
            <SearchOutlined />
          </button>
        </form>

        <div className={styles.loginBtn}>
          {isLoggedin ? <a href="/">Sair</a> : <a href="/login">Login</a>}
        </div>
      </header>
    </Router>
  );
}

import styles from './Header.module.css';

import educaForumLogo from '../../assets/images/educaforum-logo.png';
import React, { useContext } from 'react';
import { useContextModal } from '../../context/contextCadastro';
import UserServices from '../../Services/UserService';

const userServices = new UserServices();
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

export function Header() {
  const isLoged = userServices.isAuthenticated();
  const { isLoggedin } = useContext(useContextModal);

  if (isLoggedin === false) {
    userServices.logout();
  }
  console.log('logado', isLoged);
  return (
    <Router>
      <header className={styles.header}>
        <a href="/">
          <img src={educaForumLogo} alt="Logotipo do EducaFórum" />
        </a>

        <form action="" className={styles.searchBar}>
          <input title="Opa, essa função ainda está sendo desenvolvida!!" disabled type="text" placeholder="faça sua busca" name="" />
          <button title="Opa, essa função ainda está sendo desenvolvida!!" disabled type="button" className={styles.btnSearch}>
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

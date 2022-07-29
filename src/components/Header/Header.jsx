import styles from './Header.module.css';
import educaForumLogo from '../../assets/images/educaforum-logo.png';
import React, { useContext } from 'react';
import { useContextModal } from '../../context/contextCadastro';
import UserServices from '../../Services/UserService';

const userServices = new UserServices();

export function Header() {

  const isLoged = userServices.isAuthenticated();
  const { isLoggedin } = useContext(useContextModal);

  if(isLoggedin === false){
   userServices.logout()
  }
  console.log('logado',isLoged)
  return (
    <header className={styles.header}>
      <img src={educaForumLogo} alt="Logotipo do EducaFórum" />
        <div className={styles.loginBtn}>
          {isLoggedin ? <a href='/'>Sair</a>
          : <a href="/login">Login</a>}
        </div>
    </header>
  );
}

import styles from './Header.module.css';

import educaForumLogo from '../../assets/images/educaforum-logo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={educaForumLogo} alt="Logotipo do EducaFórum" />
      <div className={styles.loginBtn}>
        <a href="/login">Login</a>
      </div>
    </header>
  );
}

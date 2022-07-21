import styles from './Header.module.css';

import educaForumLogo from '../assets/educaforum-logo.png';

console.log(educaForumLogo);

export function Header() {
  return (
    <header className={styles.header}>
      <img src={educaForumLogo} alt="Logotipo do EducaFórum" />
    </header>
  );
}

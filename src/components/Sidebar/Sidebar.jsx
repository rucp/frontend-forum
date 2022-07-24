import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/236x/a1/75/4f/a1754fe7952721f74d5fd2dd565f5013.jpg"
        alt="Imagem do card de perfil"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/39747516?v=4.png" />
        <strong>Jaque Laurenti</strong>
        <span>Professora</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

import React, {useContext, useState} from 'react';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button';
import { useContextPost } from '../../context/contextPost';

export function Sidebar() {
  const { onClickNewPost} = useContext(useContextPost)
  const [disabled, setDisabled] = useState(true)


  const onClickEditPerfil = () => {
    alert("Opa, essa função ainda esta sendo desenvolvida!!")
    setDisabled(false)   
  }

  return (
    <>
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/236x/a1/75/4f/a1754fe7952721f74d5fd2dd565f5013.jpg"
        alt="Imagem do card de perfil"
      />

      <div className={styles.profile}>
        <Avatar src="https://lead.umn.edu/sites/lead.umn.edu/files/2020-04/default-user-icon.jpg" />
        <strong>{localStorage.getItem('nome')}</strong>
        <span>{localStorage.getItem('profissao')}</span>
      </div>

      <footer>
        <Button
        text={"Editar Perfil"}
        onClick={onClickEditPerfil}
        />
      </footer>
      <div className={styles.buttonPost}>
        <Button
        text={"Novo Post"}
        onClick={onClickNewPost}
        />
       </div>
    </aside>
    </>
  );
}

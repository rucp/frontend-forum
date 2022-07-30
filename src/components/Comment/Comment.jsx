import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';
import UserServices from '../../Services/UserService';

const userService = new UserServices();

export function Comment({ content, commentID, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  const [thumbsToogle, setThumbsToogle] = useState(false);

  function handleDeleteComment() {
    onDeleteComment(commentID);
    userService.deleteComment(commentID);
  }

  function handleLikeComment() {
    setLikeCount(state => {
      return thumbsToogle ? state - 1 : state + 1;
    });
    setThumbsToogle(!thumbsToogle);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://lead.umn.edu/sites/lead.umn.edu/files/2020-04/default-user-icon.jpg"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{localStorage.getItem('nome')}</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            {thumbsToogle ? 'Descurtir' : 'Curtir'} <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import { useState, useEffect } from 'react';
import {
  publishedDateRelativeToNow,
  generateDatePostFormatted,
} from '../../utils/date';

import UserServices from '../../Services/UserService';

import styles from './Post.module.css';

const userService = new UserServices();

export function Post({ author, publishedAt, content, commentsParam, postID }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    if (comments.length === 0) setComments(commentsParam);
  }, [comments]);

  async function handleCreateNewComment() {
    event.preventDefault();
    const inserted = await userService.createComment({
      postId: postID,
      message: newCommentText,
    });
    setComments([
      ...comments,
      { id: inserted.data.id, message: newCommentText },
    ]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }
  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.id !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }
  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{localStorage.getItem('nome')}</strong>
            <span>{author.educationRole}</span>
          </div>
        </div>
        <time
          title={generateDatePostFormatted(publishedAt)}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow(publishedAt)}
        </time>
      </header>

      <div className={styles.content}>
        <label>{content}</label>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              content={comment.message}
              onDeleteComment={deleteComment}
              commentID={comment.id}
            />
          );
        })}
      </div>
    </article>
  );
}

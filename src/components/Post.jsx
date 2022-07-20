import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';

import {
  publishedDateRelativeToNow,
  generateDatePostFormatted,
} from './../utils/date';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([1, 2]);

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, comments.length + 1]);

    console.log(comments);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
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
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          }
          if (line.type === 'link') {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment />
        ))}
      </div>
    </article>
  );
}

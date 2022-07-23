import React from 'react';
import styles from './Post.module.css';

import moment from 'moment';

const Post = ({ post }) => (
  <div className={styles.containerTopic}>
    <div className={styles.tags}>
      <p> {post.tags.map(tag => `#${tag} `)}</p>
    </div>

    <div className={styles.titulo}>
      <h1>{post.title}</h1>
    </div>

    <div className={styles.bottom}>
      <p>20 comentários</p>
      <p>{post.user}</p>
    </div>
  </div>
);

export default Post;

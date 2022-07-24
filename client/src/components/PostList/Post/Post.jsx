import React from 'react';
import styles from './Post.module.css';
import ForumIcon from '@mui/icons-material/Forum';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Trash } from 'phosphor-react';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';
// we can use likePost in this cointainer if we want
// () => dispatch(likePost(post._id))

import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.containerTopic}>
      <div className={styles.top}>
        <p> {post.tags.map(tag => `#${tag} `)}</p>
        <div className={styles.timeAndBtn}>
          <p>{moment(post.createdAt).fromNow()}</p>
          <button onClick={() => setCurrentId(post._id)}>
            <MoreVertIcon />
          </button>
        </div>
      </div>

      <div className={styles.titulo}>
        <h1>{post.title}</h1>
      </div>

      <div className={styles.bottom}>
        <div>
          <ForumIcon className={styles.commentIcon} />
          20 comentários
        </div>

        <div className={styles.userInfo}>
          <img
            src="https://user-images.githubusercontent.com/88854028/180618614-5fda64b0-db6a-4278-9ecf-63f850c583d6.png"
            width={25}
            height={25}
            className={styles.icon}
          />{' '}
          <p>{post.user}</p>
        </div>
        <button
          onClick={() => dispatch(deletePost(post._id))}
          title="Deletar Post"
          className={styles.btnTrash}
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
};

export default Post;

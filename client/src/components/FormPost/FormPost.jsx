import React, { useState, useEffect } from 'react';
import { Input } from '../Input';
import styles from './FormPost.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const FormPost = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    user: '',
    title: '',
    message: '',
    tags: '',
  });
  const post = useSelector(state =>
    currentId ? state.posts.find(p => p._id === currentId) : null,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = e => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);

    setPostData({
      user: '',
      title: '',
      message: '',
      tags: '',
    });
  };

  return (
    <div className={styles.container}>
      <form
        autoComplete="off"
        noValidate
        className="digitarClasses"
        onSubmit={handleSubmit}
      >
        <h1 className={styles.title}>
          {currentId ? 'Edite' : 'Conte'} sua experiência
        </h1>

        <Input
          name="user"
          placeholder="Digite seu nome"
          onChange={e => {
            setPostData({ ...postData, user: e.target.value });
          }}
          type="text"
          className={styles.inputStyle}
          value={postData.user}
        />

        <Input
          name="title"
          placeholder="Escreva um título bem chamativo"
          onChange={e => setPostData({ ...postData, title: e.target.value })}
          value={postData.title}
        />

        <Input
          name="message"
          placeholder="Aqui sua mensagem"
          onChange={e => setPostData({ ...postData, message: e.target.value })}
          value={postData.message}
        />

        <Input
          name="tags"
          placeholder="Digite até 5 tags"
          onChange={e =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
          value={postData.tags}
        />

        <div className={styles.btnsContainer}>
          <button type="submit" className={styles.submitBtn}>
            Enviar
          </button>
          <button className={styles.cleanBtn} onClick={clear}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPost;

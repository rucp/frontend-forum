import React, { useState } from 'react';
import { Input } from '../Input';
import styles from './FormPost.module.css';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

const FormPost = () => {
  const [postData, setPostData] = useState({
    user: '',
    title: '',
    message: '',
    tags: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  return (
    <div className={styles.container}>
      <form
        autoComplete="off"
        noValidate
        className="digitarClasses"
        onSubmit={handleSubmit}
      >
        <h1 className={styles.title}>Conte sua experiência</h1>

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
          onChange={e => setPostData({ ...postData, tags: e.target.value })}
          value={postData.tags}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormPost;

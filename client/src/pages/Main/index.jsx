import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import FormPost from '../../components/FormPost/FormPost';
import PostList from '../../components/PostList/PostList';
import styles from '../Main/index.module.css';

const Main = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.postsContainer}>
        <PostList setCurrentId={setCurrentId} />
      </div>
      <div className={styles.formContainer}>
        <FormPost currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};

export default Main;

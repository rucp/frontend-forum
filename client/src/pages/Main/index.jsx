import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import FormPost from '../../components/FormPost/FormPost';
import Posts from '../../components/Posts/Posts';
import styles from '../Main/index.module.css';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.postsContainer}>
        <Posts />
      </div>
      <div className={styles.formContainer}>
        <FormPost />
      </div>
    </div>
  );
};

export default Main;

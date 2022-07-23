import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts);

  console.log(posts);

  return !posts.length ? (
    <div>
      <h1>Não há posts</h1>
    </div>
  ) : (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Posts;

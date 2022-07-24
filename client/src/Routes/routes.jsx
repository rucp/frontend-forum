import React from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import Main from '../pages/Main';
import styles from './routes.module.css';

import { Post } from '../components/Post/Post';
import { Sidebar } from '../components/Sidebar/Sidebar';

import { generateDatePost } from '../utils/date';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import Auth from '../components/Auth/Auth';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/murillocosta.png',
      name: 'Murillo Costa',
      educationRole: 'Estudante',
    },
    content: [
      { type: 'paragraph', content: 'Lorem, ipsum dolor sit amet' },
      {
        type: 'paragraph',
        content: 'consectetur adipisicing elit. Dolore, tempora commodi.',
      },
      {
        type: 'link',
        content: 'http://portal.mec.gov.br/',
      },
    ],
    publishedAt: generateDatePost(),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rucp.png',
      name: 'Ruan Paulo',
      educationRole: 'Estudante',
    },
    content: [
      { type: 'paragraph', content: 'Lorem, ipsum dolor sit amet' },
      {
        type: 'paragraph',
        content: 'consectetur adipisicing elit. Dolore, tempora commodi.',
      },
      {
        type: 'link',
        content: 'http://portal.mec.gov.br/',
      },
    ],
    publishedAt: generateDatePost(),
  },
];

const Routering = () => {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <div className={styles.wrapper}>
                  <Sidebar />
                  <main>
                    {posts.map(post => (
                      <Post
                        key={post.id}
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                      />
                    ))}
                  </main>
                </div>
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
  );
};

export default Routering;

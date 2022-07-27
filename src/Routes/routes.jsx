import React, {useState, useContext} from 'react';
import Login from '../pages/Login';
import ProtectedRoutes from './ProtectedRoutes';
import SignUp from '../pages/SignUp/';
import styles from './routes.module.css';
import { useContextPost } from '../context/contextPost';
import { Post } from '../components/Post/Post';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { generateDatePost } from '../utils/date';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




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
  const {stateNewPost, onClickNewPost} = useContext(useContextPost)

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<h1>Página inicial</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
              <div className={styles.wrapper}>
                <Sidebar />
                <main>
                  {
                    stateNewPost ? (
                      <>
                        <form onSubmit={'handleCreateNewComment'} className={styles.commentForm}>
                        <strong> Digite seu novo Post</strong>
    
                         <textarea
                          name="comment"
                          placeholder="Deixe um comentário"
                          value={'newCommentText'}
                          onChange={'handleNewCommentChange'}
                          onInvalid={'handleNewCommentInvalid'}
                          required 
                        />
    
                        <footer>
                          <button type="submit" disabled={'isNewCommentEmpty'}>
                            Publicar
                          </button>
                        </footer>
                      </form>
                    </>
                    ): ''
                  }
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
          }
        />
      </Routes>
    </Router>
  
  );
};

export default Routering;

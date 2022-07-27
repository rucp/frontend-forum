import React, {useState, useContext} from 'react';
import Login from '../pages/Login';
import ProtectedRoutes from './ProtectedRoutes';
import SignUp from '../pages/SignUp/';
import styles from './routes.module.css';
import { useContextPost } from '../context/contextPost';
import { Post } from '../components/Post/Post';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { generateDatePost } from '../utils/date';
import { Avatar } from '../components/Avatar/Avatar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




let posts = [
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
  const {stateNewPost, onClickNewPost} = useContext(useContextPost);

//usando api estática
  const [newPots, setNewPosts] = useState([{
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
  }]);
  const [resultMessage, setResultMessage] = useState('')
  const [contentMessage, setContentMessage] = useState('')
  console.log(newPots)
  console.log(contentMessage)
  
  //adicioando post novo

  const [newPostsText, setNewPostsText] = useState({
    id: 3,
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
  })

  function handleCreateNewPosts() {
    event.preventDefault();
    // setando novo post
    setNewPosts([newPostsText, ...newPots]);
    setResultMessage('');

  }

  function handleNewPostChange(event) {
    event.target.setCustomValidity('');
    setContentMessage(event.target.value)
    setResultMessage(event.target.value);
  }

  function handleNewPostInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }



  // function deleteComment(commentToDelete) {
  //   const commentsWithoutDeletedOne = comments.filter(comment => {
  //     return comment !== commentToDelete; 
  //   })

  //   setComments(commentsWithoutDeletedOne);
  // }

  const isNewPostEmpty = resultMessage.length === 0;
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
                      <div className={styles.Post}>
                        <form onSubmit={handleCreateNewPosts} className={styles.commentForm}>
                        <strong> Digite seu novo Post</strong>
    
                         <textarea
                          name="post"
                          placeholder="Escreva seu post"
                          value={resultMessage}
                          onChange={handleNewPostChange}
                          onInvalid={handleNewPostInvalid}
                          required 
                        />
    
                        <footer>
                          <button type="submit" disabled={isNewPostEmpty}>
                            Publicar
                          </button>
                        </footer>
                      </form>
                    </div>
                    ): ''
                  }
                  <div style={{marginBottom: "1.5rem"}}></div>
                  {newPots.map(post => (
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

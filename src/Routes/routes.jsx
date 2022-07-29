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
import { Main } from '../pages/Main';
import UserServices from '../Services/UserService';

const userService = new UserServices();

const Routering = () => {
  const {stateNewPost, onClickNewPost} = useContext(useContextPost);
  const [resultMessage, setResultMessage] = useState('')
  const [contentMessage, setContentMessage] = useState('')
  const [postsState, setPostsState] = useState(["Mensagem Fixa"])

  const baseObject = {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/murillocosta.png',
        name: 'Murillo Costa',
        educationRole: 'Estudante',
      },
      content: '',
      publishedAt: generateDatePost(),
  }
  
  function handleCreateNewPosts() {
    event.preventDefault();
    // setando novo post
    setPostsState([contentMessage, ...postsState]);
    userService.createPost(contentMessage)
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

  const isNewPostEmpty = resultMessage.length === 0;
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
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
                  {postsState.map(post => {
                    let copyObject = baseObject
                    copyObject.content = post
                    copyObject.author.name = localStorage.getItem('nome')
                    console.log('objcopyt',copyObject)
                    return <Post
                      key={copyObject.id}
                      author={copyObject.author}
                      content={copyObject.content}
                      publishedAt={copyObject.publishedAt}
                    />
                  })}
                </main>
              </div>
          }
        />
      </Routes>
    </Router>
  
  );
};

export { Routering };

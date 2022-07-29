import React, {useState} from 'react';
import { Header } from './components/Header/Header';
import { Routering } from './Routes/routes';
import './assets/global.css';
import { useContextModal } from './context/contextCadastro';
import { useContextPost } from './context/contextPost';


export function App() {

  const[stateNewPost, setOnclickNewPost] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false);

  const onClickNewPost = () => {
    setOnclickNewPost(true) 
  }
  const estaLogado = () => {
    setIsLoggedin(true)
  }

  return (
    <>
    <useContextModal.Provider
    value={
      {
        isLoggedin,
        setIsLoggedin,
        estaLogado
      }
    }>
    <useContextPost.Provider
    value={{
      stateNewPost,
      onClickNewPost
    }}>
    <div>
      <Header />
      <Routering />
   </div>
   </useContextPost.Provider>
   </useContextModal.Provider>
   </>
  );
}

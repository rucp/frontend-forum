import React, {useState} from 'react';
import { Header } from './components/Header/Header';
import Routering from './Routes/routes';
import './assets/global.css';
import { useContextModal } from './context/contextCadastro';
import { useContextPost } from './context/contextPost';


// author: {avatar_url: "", name: "", role:""}
// publishedAt: Date
// content: String

// const users = fetch('./src/MOCK/MOCK_DATA.json', {
//   headers: {
//     Accept: "application/json"
//   }
// }).then(res => res.json())
// console.log(users)

export function App() {

  const[stateNewPost, setOnclickNewPost] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false);

  const onClickNewPost = () => {
    setOnclickNewPost(true) 
  }
  const estaLogado = () => {
    setIsLoggedin(true)
  }
  console.log(isLoggedin)
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

import React, {useState} from 'react';
import { Header } from './components/Header/Header';
import Routering from './Routes/routes';
import './assets/global.css';
import { useContextModal } from './context/contextCadastro';


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
  const [isLoggedin, setIsLoggedin] = useState(false);
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
    <div>
      <Header />
      <Routering />
   </div>
   </useContextModal.Provider>
   </>
  );
}

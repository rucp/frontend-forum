import { Header } from './components/Header/Header';
import Routering from './Routes/routes';
import './assets/global.css';


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
  return (
    <div>
      <Header />
      <Routering />
    </div>
  );
}

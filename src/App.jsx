import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Joninhas Schmedtmann"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum animi corporis odit quo tempora officia illum numquam. Nam adipisci perferendis deserunt odit error eos excepturi vitae tempore sunt laudantium."
      />
      <Post
        author="Jaque Laurenti"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum animi corporis odit quo tempora officia illum numquam. Nam adipisci perferendis deserunt odit error eos excepturi vitae tempore sunt laudantium."
      />
    </div>
  );
}

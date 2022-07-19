import { Post } from './Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jaque Laurenti"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus laboriosam, voluptate alias ipsum laudantium distinctio quasi, ipsa vero porro culpa consequuntur sequi cumque dignissimos libero? Neque beatae animi asperiores vel?"
          />
          <Post
            author="Esdras Aguilar"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus laboriosam, voluptate alias ipsum laudantium distinctio quasi, ipsa vero porro culpa consequuntur sequi cumque dignissimos libero? Neque beatae animi asperiores vel?"
          />
        </main>
      </div>
    </div>
  );
}

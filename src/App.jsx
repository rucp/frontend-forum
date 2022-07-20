import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Comment } from './components/Comment';

import './global.css';
import styles from './App.module.css';
import { generateDatePost } from './utils/date';

// author: {avatar_url: "", name: "", role:""}
// publishedAt: Date
// content: String

// const users = fetch('./src/MOCK/MOCK_DATA.json', {
//   headers: {
//     Accept: "application/json"
//   }
// }).then(res => res.json())
// console.log(users)

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

export function App() {
  return (
    <div>
      <Header />

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
    </div>
  );
}

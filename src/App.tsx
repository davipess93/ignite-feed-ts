import { Header } from './components/Header';
import { Post, PostProps } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/davipess93.png",
      name: "Davi Pessoa",
      role: "Web Developer JR @ Servfaz"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'davi.github/doctorcare' }, 
    ],
    publishedAt: new Date('2023-01-09 17:20:36')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ijoaobatistadev.png",
      name: "João Batista",
      role: "Web Developer Sr @ Servfaz"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'joao.design/doctorcare' }, 
    ],
    publishedAt: new Date('2023-01-10 09:47:22')
  }
];


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


export default App

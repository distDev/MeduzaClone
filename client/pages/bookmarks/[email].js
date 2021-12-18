import { useEffect, useState } from 'react';
import axios from 'axios';
import ChronologyPost from '../../components/ChronologyPost';
import moment from 'moment';
import Link from 'next/link';
import BookmarksPosts from '../../components/BookmarksPosts';

const bookmarks = ({ zakladki, dataBookmark }) => {
  const { bookmarkPosts } = dataBookmark;
  const [posts, setPosts] = useState(zakladki);
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [bookmark, setBookmark] = useState(bookmarkPosts);

  // добавление статьи в закладки
  const handleAdd = async () => {
    setBookmark([...bookmark, { id: id, title: title }]);
    await axios.put('http://localhost:1337/bookmarks/20', {
      bookmarkPosts: bookmark,
    });
    setId('');
    setTitle('');
  };

  return (
    <div className='container main chronology-container'>
      <h1>Закладки</h1>
      <div className='chronology-grid'>
        {posts.length ? <BookmarksPosts posts={posts} /> : 'Загрузка'}
        <div>
          <input
            type='text'
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder='id'
          />
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='title'
          />
          <button onClick={handleAdd}>Добавить</button>
        </div>
      </div>
    </div>
  );
};

export default bookmarks;

export async function getServerSideProps({ params }) {
  const res = await axios.get(`http://localhost:1337/bookmarks/20`);
  const dataBookmark = res.data;
  const zakladki = data.map((e) => e.posts)[0];

  return {
    props: {
      zakladki,
      dataBookmark,
    }, // will be passed to the page component as props
  };
}

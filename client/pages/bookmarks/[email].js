import axios from 'axios';
import ChronologyPost from '../../components/ChronologyPost';
import { useSelector } from 'react-redux';

const bookmarks = ({ posts }) => {
  const user = useSelector((state) => state.login.user);
  const bookmarksData = useSelector((state) => state.bookmark.bookmarksData);
  
  const filtered = posts.filter(({ id }) =>
    bookmarksData.some((exclude) => exclude.id === id)
  );
  console.log(filtered);

  return (
    <div className='container main chronology-container'>
      <h1>Закладки</h1>
      <div className='chronology-grid'>
        <ChronologyPost posts={filtered}/>
      </div>
    </div>
  );
};

export default bookmarks;

export async function getServerSideProps({ params }) {
  const res = await axios.get(`http://localhost:1337/posts`);
  const posts = res.data;

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}

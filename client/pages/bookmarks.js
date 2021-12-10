import ChronologyPost from "../components/ChronologyPost";
import { useState } from 'react';
import { postsData } from '../utils/data';


const bookmarks = () => {
 const [posts, setPosts] = useState(postsData);


  return (
    <div className='container main chronology-container'>
      <h1>Закладки</h1>
      <div className='chronology-grid'>
        <ChronologyPost posts={posts} start={0} end={3} />
      </div>
    </div>
  );
};

export default bookmarks;

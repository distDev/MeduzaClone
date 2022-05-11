import moment from 'moment';
import 'moment/locale/ru';
import Link from 'next/link';

const ChronologyPost = ({ posts, end, start }) => {
  return (
    <>
      {posts.slice(start, end).map((e, index) => (
        <div className='chronology-post' key={index + e.name}>
          <div className='chronology-post-img'>
            <img src={'http://localhost:1337' + e.previev[0].url} alt='' />
          </div>
          <div className='chronology-post-content'>
            <div className='chronology-post-content-text'>
              <span>{e.categories[0].ruName}</span>
              <h3>{e.title.slice(0, 120)}</h3>
            </div>
            <p>{moment(e.published_at).startOf('hour').fromNow()}</p>
          </div>
          <Link href={`/posts/${e.id}`}>
            <a className='post-link'></a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ChronologyPost;

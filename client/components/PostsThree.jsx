import React from 'react';
import moment from 'moment';
import 'moment/locale/ru'; 
import Link from 'next/link';


const PostsThree = ({ posts, end, start, four }) => {
  return (
    <>
      {posts.slice(start, end).map((e, index) => (
        <div className='post-medium' key={index + e.category}>
          <div
            className={
              four
                ? 'post-medium-image-container-second'
                : 'post-medium-image-container'
            }
          >
            <img src={'http://localhost:1337' + e.previev[0].url} alt='' />
          </div>
          <div className='post-medium-content'>
            <div className='post-medium-content-text'>
              <span>{e.categories[0].ruName}</span>
              <h4>{e.title.slice(0, 80) + '...'}</h4>
            </div>
            <div className='post-medium-content-date'>
              <p>{moment(e.published_at).startOf('hour').fromNow()}</p>
            </div>
          </div>
          <Link href={`/posts/${e.id}`}>
            <a className='post-link'></a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PostsThree;

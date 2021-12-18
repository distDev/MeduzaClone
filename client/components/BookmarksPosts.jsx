import Link from 'next/link';
import React from 'react';

const BookmarksPosts = ({posts}) => {
    return (
      <>
        {posts.map((e, index) => (
          <div className='chronology-post' key={index + e.name}>
            <div className='chronology-post-img'>
              <img src={'http://localhost:1337' + e.previev[0].url} alt='' />
            </div>
            <div className='chronology-post-content'>
              <div className='chronology-post-content-text'>
                <h3>{e.title}</h3>
              </div>
              <p>{e.published_at}</p>
            </div>
            <Link href={`/posts/${e.id}`}>
              <a className='post-link'></a>
            </Link>
          </div>
        ))}
      </>
    );
};

export default BookmarksPosts;
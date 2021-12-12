import React from 'react';

const ChronologyPost = ({ posts, end, start }) => {
  return (
    <>
      {posts.slice(start, end).map((e) => (
        <div className='chronology-post'>
          <div className='chronology-post-img'>
            <img src={'http://localhost:1337' + e.previev[0].url} alt='' />
          </div>
          <div className='chronology-post-content'>
            <div className='chronology-post-content-text'>
              <span>{e.categories[0].ruName}</span>
              <h3>{e.title}</h3>
            </div>
            <p>{e.date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChronologyPost;

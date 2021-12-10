import React from 'react';

const ChronologyPost = ({ posts, end, start }) => {
  return (
    <>
      {posts.slice(start, end).map((e) => (
        <div className='chronology-post'>
          <div className='chronology-post-img'>
            <img src={e.img} alt='' />
          </div>
          <div className='chronology-post-content'>
            <div className='chronology-post-content-text'>
              <span>{e.category}</span>
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

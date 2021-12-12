import React from 'react';

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
              <p>{e.date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsThree;

import React from 'react';

const PostsThree = ({ posts, end, start }) => {
  return (
    <>
      {posts.slice(start, end).map((e, index) => (
        <div className='post-medium' key={index + e.category}>
          <div className='post-medium-image-container'>
            <img src={e.img} alt='' />
          </div>
          <div className='post-medium-content'>
            <div className='post-medium-content-text'>
              <span>{e.category}</span>
              <h4>{e.title}</h4>
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
import React from 'react';
import PostsFive from './PostsFive';
import PostsThree from './PostsThree';
import PostsTwo from './PostsTwo';

const Posts = ({ variantPost, start, end, posts, four }) => {
  return (
    <>
      {variantPost == 3 ? (
        <PostsThree start={start} end={end} posts={posts} />
      ) : (
        ''
      )}
      {variantPost == 4 ? (
        <PostsThree start={start} end={end} posts={posts} four={four} />
      ) : (
        ''
      )}
      {variantPost == 2 ? (
        <PostsTwo start={start} end={end} posts={posts} />
      ) : (
        ''
      )}{' '}
      {variantPost == 5 ? (
        <PostsFive start={start} end={end} posts={posts} />
      ) : (
        ''
      )}
    </>
  );
};

export default Posts;

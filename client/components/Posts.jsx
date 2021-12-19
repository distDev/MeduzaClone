import React, { useEffect } from 'react';
import PostsFive from './PostsFive';
import PostsThree from './PostsThree';
import PostsTwo from './PostsTwo';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarks } from '../store/slices/bookmarkSlice';

const Posts = ({ variantPost, start, end, posts, four }) => {
  const dispatch = useDispatch();
  const bookmarksData = useSelector((state) => state.bookmark.bookmarksData);
  const user = useSelector((state) => state.login.user);

  // сохранение поста в стор и добавление его в api юзера
  const savedBokmark = async ({ id }) => {
    dispatch(addBookmarks({ id }));
    const idS = user.map((e) => e.id)[0]
    await axios.put(`http://localhost:1337/users/${idS}`, {
      bookmarks: bookmarksData,
    });
  };

  return (
    <>
      {variantPost == 3 ? (
        <PostsThree
          start={start}
          end={end}
          posts={posts}
          savedBokmark={savedBokmark}
          
        />
      ) : (
        ''
      )}
      {variantPost == 4 ? (
        <PostsThree
          start={start}
          end={end}
          posts={posts}
          four={four}
          savedBokmark={savedBokmark}
        />
      ) : (
        ''
      )}
      {variantPost == 2 ? (
        <PostsTwo
          savedBokmark={savedBokmark}
          start={start}
          end={end}
          posts={posts}
         
        />
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

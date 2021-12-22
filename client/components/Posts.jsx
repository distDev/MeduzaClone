import React, { useEffect, useState } from 'react';
import PostsFive from './PostsFive';
import PostsThree from './PostsThree';
import PostsTwo from './PostsTwo';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBookmark,
  addBookmarks,
  removeBookmarks,
  saveBookmarks,
} from '../store/slices/bookmarkSlice';

const Posts = ({ variantPost, start, end, posts, four }) => {
  const dispatch = useDispatch();
  const bookmarksData = useSelector((state) => state.bookmark.bookmarksData);
  const user = useSelector((state) => state.login.user);
 
  // сохранение закладки
  const savedBokmark = async ({ id }) => {
    dispatch(addBookmarks({ id }));

    if (user !== null) {
      const data = [...bookmarksData, { id: id }];
      const idS = user.map((e) => e.id)[0];
      await axios.put(`http://localhost:1337/users/${idS}`, {
        bookmarks: data,
      });
    }
  };

  // удаление закладки
  const deleteBokmark = async ({ id }) => {
    dispatch(removeBookmarks({ id }));
     
    if (user !== null) {
       const data = bookmarksData.filter((e) => e.id !== id);
       const idS = user.map((e) => e.id)[0];
       await axios.put(`http://localhost:1337/users/${idS}`, {
         bookmarks: data,
       });
     }
  };

  return (
    <>
      {variantPost == 3 ? (
        <PostsThree
          start={start}
          end={end}
          posts={posts}
          savedBokmark={savedBokmark}
          deleteBokmark={deleteBokmark}
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
          deleteBokmark={deleteBokmark}
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
          deleteBokmark={deleteBokmark}
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

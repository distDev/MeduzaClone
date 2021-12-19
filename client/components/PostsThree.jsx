import React from 'react';
import moment from 'moment';
import 'moment/locale/ru'; 
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';


const PostsThree = ({ posts, end, start, four, savedBokmark }) => {

  const user = useSelector((state) => state.login.user);
  const bookmarksData = useSelector((state) => state.bookmark.bookmarksData);

  return (
    <>
      {posts
        .slice(start, end)
        .map(
          (
            { category, categories, id, published_at, previev, title },
            index
          ) => (
            <div className='post-medium' key={index + category}>
              <div
                className={
                  four
                    ? 'post-medium-image-container-second'
                    : 'post-medium-image-container'
                }
              >
                <img src={'http://localhost:1337' + previev[0].url} alt='' />
              </div>
              <div className='post-medium-content'>
                <div className='post-medium-content-text'>
                  <span>{categories[0].ruName}</span>
                  <h4>{title.slice(0, 80) + '...'}</h4>
                </div>
                <div className='post-medium-content-date'>
                  <p>{moment(published_at).startOf('hour').fromNow()}</p>
                </div>
              </div>
              {user ? (
                <Checkbox
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                  checked={
                    bookmarksData
                      ? bookmarksData.find((e) => e.id === id)
                        ? true
                        : false
                      : false
                  }
                  onClick={() => savedBokmark({ id })}
                />
              ) : (
                ''
              )}
              <Link href={`/posts/${id}`}>
                <a className='post-link'></a>
              </Link>
            </div>
          )
        )}
    </>
  );
};

export default PostsThree;

import moment from 'moment';
import 'moment/locale/ru';
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';

const PostsTwo = ({
  posts,
  end,
  start,
  savedBokmark,
  deleteBokmark,
}) => {
  const user = useSelector((state) => state.login.user);
  const bookmarksData = useSelector((state) => state.bookmark.bookmarksData);
  const setChecked = (idS) => Boolean(bookmarksData.find((e) => e.id === idS));
  return (
    <>
      {posts
        .slice(start, end)
        .map(
          (
            { category, categories, id, published_at, previev, title },
            index
          ) => (
            <div className='post_large' key={index + category}>
              {user ? (
                <Checkbox
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                  checked={setChecked(id)}
                  onClick={() =>
                    setChecked(id)
                      ? deleteBokmark({ id })
                      : savedBokmark({ id })
                  }
                />
              ) : (
                ''
              )}
              <div className='post_large-content'>
                <span>{categories[0].ruName}</span>
                <h3>{title.slice(0, 82) + '...'}</h3>
                <p>{moment(published_at).startOf('hour').fromNow()}</p>
              </div>
              <img src={'http://localhost:1337' + previev[0].url} alt='' />
              <Link href={`/posts/${id}`}>
                <a className='post-link'></a>
              </Link>
            </div>
          )
        )}
    </>
  );
};

export default PostsTwo;

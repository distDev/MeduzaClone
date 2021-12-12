const PostsTwo = ({ posts, end, start }) => {
  return (
    <>
      {posts.slice(start, end).map((e, index) => (
        <div className='post_large' key={index + e.category}>
          <div className='post_large-content'>
            <span>{e.categories[0].ruName}</span>
            <h3>{e.title.slice(0, 82) + '...'}</h3>
            <p>{e.published_at}</p>
          </div>
          <img src={'http://localhost:1337' + e.previev[0].url} alt='' />
        </div>
      ))}
    </>
  );
};

export default PostsTwo;

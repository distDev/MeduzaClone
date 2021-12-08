const PostsTwo = ({ posts, end, start }) => {
  return (
    <>
      {posts.slice(start, end).map((e, index) => (
        <div className='post_large' key={index + e.category}>
          <div className='post_large-content'>
            <span>{e.category}</span>
            <h3>{e.title}</h3>
            <p>{e.date}</p>
          </div>
          <img src={e.img} alt='' />
        </div>
      ))}
    </>
  );
};

export default PostsTwo;

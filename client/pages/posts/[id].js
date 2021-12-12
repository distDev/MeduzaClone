import axios from 'axios';
import React, { useState } from 'react';
import PostsThree from '../../components/PostsThree';
import PostsTwo from '../../components/PostsTwo';
import moment from 'moment';
import 'moment/locale/ru'; 
import MarkdownIt from 'markdown-it';


const Post = ({ data, posts }) => {

  const postRec = posts.filter((e) => e.id !== data.id)
  
  const md = new MarkdownIt();
  const htmlContent = md.render(data.body);
  console.log(data);

  return (
    <>
      <div className='container post-main'>
        <div className='post-content'>
          <div className='post-content-head'>
            <span>{data.categories[0].ruName}</span>
            <h1>{data.title}</h1>
            <p>{moment(data.published_at).startOf('hour').fromNow()}</p>
          </div>
          <div
            className='post-content-body'
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></div>
        </div>
      </div>
      <div className='container second-grid main'>
        <PostsThree posts={postRec} start={2} end={5} />
        <PostsTwo posts={postRec} start={0} end={2} />
        <PostsThree posts={postRec} start={2} end={5} />
        <PostsTwo posts={postRec} start={0} end={2} />
      </div>
    </>
  );
};

export default Post;

export async function getServerSideProps({ params }) {
 
   const res = await axios.get(`http://localhost:1337/posts/${params.id}`);
    const resSecond = await axios.get('http://localhost:1337/posts');
   const data = res.data;
   const posts = resSecond.data
  return {
    props: {
      data,
      posts,
    }, // will be passed to the page component as props
  };
}

import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import PostsFive from '../components/PostsFive';
import PostsThree from '../components/PostsThree';
import PostsTwo from '../components/PostsTwo';
import { postsData } from '../utils/data';

const coronavirus = ({ data }) => {
   const posts = data
     .map((i) => [Math.random(), i])
     .sort()
     .map((i) => i[1]);

  return (
    <>
      <div className='container'>
        <Head>
          <title>Коронавирус</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='corona-banner'>
          <h1>КОРОНАВИРУС</h1>
        </div>
        <main className='container main'>
          <PostsFive />
          <div className='second-grid mt-15'>
            <PostsThree posts={posts} start={2} end={5} />
            <PostsTwo posts={posts} start={0} end={2} />
            <PostsThree posts={posts} start={2} end={5} />
            <PostsTwo posts={posts} start={0} end={2} />
            <PostsThree posts={posts} start={2} end={5} />
            <PostsTwo posts={posts} start={0} end={2} />
          </div>
        </main>
      </div>
    </>
  );
};

export default coronavirus;

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    'http://localhost:1337/posts?categories.name=coronavirus'
  );
  const data = res.data;

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
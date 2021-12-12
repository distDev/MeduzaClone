import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ChronologyPost from '../components/ChronologyPost';
import PostsFive from '../components/PostsFive';
import PostsThree from '../components/PostsThree';
import PostsTwo from '../components/PostsTwo';
import { postsData } from '../utils/data';

export default function Home({data}) {
  const switchStatus = useSelector((state) => state.switch.status);
 const posts = data
   .map((i) => [Math.random(), i])
   .sort()
   .map((i) => i[1]);

  console.log(posts);

  return (
    <div className='container'>
      <Head>
        <title>Главная</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {switchStatus ? (
        <main className='container main chronology-container'>
          <div className='chronology-grid '>
            <ChronologyPost posts={posts} start={0} end={6} />
          </div>
        </main>
      ) : (
        <main className='container main home-grid '>
          <PostsTwo posts={posts} start={0} end={2} />
          <PostsFive />
          <PostsThree posts={posts} start={2} end={5} />
          <PostsTwo posts={posts} start={0} end={2} />
          <PostsFive />
          <PostsThree posts={posts} start={2} end={5} />
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {

  const res = await axios.get('http://localhost:1337/posts');
  const data = res.data;
 
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

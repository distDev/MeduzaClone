import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ChronologyPost from '../components/ChronologyPost';

import PostsThree from '../components/PostsThree';
import PostsTwo from '../components/PostsTwo';
import { postsData } from '../utils/data';

const shapito = ({ data }) => {
   const posts = data
     .map((i) => [Math.random(), i])
     .sort()
     .map((i) => i[1]);
  const switchStatus = useSelector((state) => state.switch.status);

  return (
    <div className='container'>
      <Head>
        <title>Шапито</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {switchStatus ? (
        <main className=' main chronology-container'>
          <div className='chronology-grid '>
            <ChronologyPost posts={posts} start={0} end={6} />
          </div>
        </main>
      ) : (
        <main className='container main'>
          <div className='shapito-grid'>
            <PostsThree posts={posts} start={2} end={5} />
            <PostsTwo posts={posts} start={0} end={2} />
            <PostsThree posts={posts} start={2} end={6} />
          </div>
          <div className='second-grid'>
            <PostsThree posts={posts} start={2} end={5} />
            <PostsTwo posts={posts} start={0} end={2} />
            <PostsThree posts={posts} start={2} end={5} />
            <PostsTwo posts={posts} start={0} end={2} />
          </div>
        </main>
      )}
    </div>
  );
};

export default shapito;

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    'http://localhost:1337/posts?categories.name=shapito'
  );
  const data = res.data;

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
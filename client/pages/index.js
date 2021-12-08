import Head from 'next/head';
import { useState } from 'react';
import PostsFive from '../components/PostsFive';
import PostsThree from '../components/PostsThree';
import PostsTwo from '../components/PostsTwo';
import { postsData } from '../utils/data';

export default function Home() {

  const [posts, setPosts] = useState(postsData);

  return (
    <div className='container'>
      <Head>
        <title>Главная</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container main home-grid '>
        <PostsTwo posts={posts} start={0} end={2} />
        <PostsFive />
        <PostsThree posts={posts} start={2} end={5} />
        <PostsTwo posts={posts} start={0} end={2} />
        <PostsFive />
        <PostsThree posts={posts} start={2} end={5} />
      </main>
    </div>
  );
}

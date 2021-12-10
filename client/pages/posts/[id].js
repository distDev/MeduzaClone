import React, { useState } from 'react';
import PostsThree from '../../components/PostsThree';
import PostsTwo from '../../components/PostsTwo';
import { postsData } from '../../utils/data';

const Post = ({ par }) => {

const [posts, setPosts] = useState(postsData);

  return (
    <>
      <div className='container post-main'>
        <div className='post-content'>
          <div className='post-content-head'>
            <span>Новости</span>
            <h1>
              Шутки кончились: мем из тиктока «Москва, метро „Люблино“.
              Работаем!» добрался до Испании
            </h1>
            <p>12 ноября</p>
          </div>
          <div className='post-content-body'>
            <p>
              «Москва, метро „Люблино“. Работаем!» — кажется, от этих четырех
              слов в последние пару недель в тиктоке было никуда не деться. Но,
              как говорится, пранк явно вышел из-под контроля: 28 ноября в
              официальном аккаунте Ла Лиги (чемпионата Испании по футболу)
              появился ролик с тренировкой мадридского «Реала». С той самой
              подписью на русском языке и ремиксом трека «In Da Club» рэпера 50
              Cent. Но что вообще происходит и с чего все началось? Сейчас
              объясним!
            </p>
            <p>
              «Москва, метро „Люблино“. Работаем!» — кажется, от этих четырех
              слов в последние пару недель в тиктоке было никуда не деться. Но,
              как говорится, пранк явно вышел из-под контроля: 28 ноября в
              официальном аккаунте Ла Лиги (чемпионата Испании по футболу)
              появился ролик с тренировкой мадридского «Реала». С той самой
              подписью на русском языке и ремиксом трека «In Da Club» рэпера 50
              Cent. Но что вообще происходит и с чего все началось? Сейчас
              объясним!
            </p>
            <p>
              «Москва, метро „Люблино“. Работаем!» — кажется, от этих четырех
              слов в последние пару недель в тиктоке было никуда не деться. Но,
              как говорится, пранк явно вышел из-под контроля: 28 ноября в
              официальном аккаунте Ла Лиги (чемпионата Испании по футболу)
              появился ролик с тренировкой мадридского «Реала». С той самой
              подписью на русском языке и ремиксом трека «In Da Club» рэпера 50
              Cent. Но что вообще происходит и с чего все началось? Сейчас
              объясним!
            </p>
          </div>
        </div>
      </div>
      <div className='container second-grid main'>
        <PostsThree posts={posts} start={2} end={5} />
        <PostsTwo posts={posts} start={0} end={2} />
        <PostsThree posts={posts} start={2} end={5} />
        <PostsTwo posts={posts} start={0} end={2} />
       
      </div>
    </>
  );
};

export default Post;

export async function getServerSideProps({ params }) {
  const par = params.id;
  return {
    props: {
      par,
    }, // will be passed to the page component as props
  };
}

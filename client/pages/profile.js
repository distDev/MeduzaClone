import { useRouter } from 'next/router';

const profile = () => {

  const router = useRouter();

  const handleBookmark = () => {
    router.push('/bookmarks');
  }

  return (
    <div className='container main profile-wrap'>
      <div className='profile-container'>
        <h1>5secondstam@mail.ru</h1>
        <div className='profile-btns'>
          <button className='profile-ext'>ВЫЙТИ</button>
          <button className='profile-del'>УДАЛИТЬ ПРОФИЛЬ</button>
          <button onClick={handleBookmark} className='profile-bkm'>
            ЗАКЛАДКИ
          </button>
        </div>
      </div>
    </div>
  );
};

export default profile;

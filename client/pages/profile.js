import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/slices/authSlice';

const profile = () => {
  const userData = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleQuit = () => {
    dispatch(logoutUser());
    router.push('/');
  }

  console.log(userData);

  return (
    <div className='container main profile-wrap'>
      {userData ? (
        <div className='profile-container'>
          <h1>{userData.email}</h1>
          <div className='profile-btns'>
            <button className='profile-ext' onClick={handleQuit}>
              ВЫЙТИ
            </button>
            <button className='profile-del'>УДАЛИТЬ ПРОФИЛЬ</button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default profile;

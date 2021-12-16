import Link from 'next/link';
import logo from '../public/logo.png';
import Image from 'next/image';
import { headerPaths } from '../utils/headerPath';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ModalLogin from './ModalLogin';
import { Magic } from 'magic-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../store/slices/authSlice';

const Header = () => {
  const [mag, setMag] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authStatus);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const halndleQuit = async () => {
    dispatch(logoutUser());
    await mag.user.logout();
  };

  const handleRouteMain = () => {
    router.push('/');
  };

  useEffect(() => {
    const magic = new Magic('pk_live_80C88C06AA220751', { locale: 'ru' });

    const getToken = async () => {
      try {
        const token = await magic.user.getIdToken();
        return token;
      } catch (err) {
        console.log(err);
      }
    };

    const checkUserLoggedIn = async () => {
      try {
        const isLoggedIn = await magic.user.isLoggedIn();

        if (isLoggedIn) {
          const { email } = await magic.user.getMetadata();
          dispatch(loginUser({ email }));
          const token = await getToken();
          console.log('checkUserLoggedIn token', token);
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkUserLoggedIn();
  }, []);

  useEffect(() => {
    const magic = new Magic('pk_live_80C88C06AA220751', { locale: 'ru' });

    setMag(magic);
  }, []);

  return (
    <>
      <header className='header'>
        <div className='header-logo-container'>
          <Image src={logo} alt='logo' onClick={handleRouteMain} />
        </div>
        <ul className='header-menu'>
          {headerPaths.map((e, index) => (
            <li key={e.path + index}>
              <Link href={e.path}>
                <a
                  className={
                    e.path === router.pathname ? 'header-link-active' : ''
                  }
                >
                  {e.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {userData ? (
          <div className='header__log' onClick={halndleQuit}>
            <p>ВЫЙТИ</p>
          </div>
        ) : (
          <div className='header__log' onClick={handleOpen}>
            <p>ВОЙТИ</p>
          </div>
        )}
      </header>
      <div>
        <ModalLogin
          open={open}
          setOpen={setOpen}
          
          mag={mag}
          handleClose={handleClose}
        />
      </div>
    </>
  );
};

export default Header;

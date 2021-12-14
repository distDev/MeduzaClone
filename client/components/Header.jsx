import Link from 'next/link';
import logo from '../public/logo.png';
import Image from 'next/image';
import { headerPaths } from '../utils/headerPath';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ModalLogin from './ModalLogin';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/slices/authSlice';

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authStatus);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const halndleQuit = () => {
    dispatch(logoutUser());
  };
  const handleRouteMain = () => {
    router.push('/');
  };

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
        <ModalLogin open={open} setOpen={setOpen} handleClose={handleClose} />
      </div>
    </>
  );
};

export default Header;

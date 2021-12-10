import Link from 'next/link';
import logo from '../public/logo.png';
import Image from 'next/image';
import { headerPaths } from '../utils/headerPath';

import { useRouter } from 'next/router';

const Header = () => {
  

  const router = useRouter();

 
  
  const handleRouteProfile = () => {
    router.push('/profile');
  };
   const handleRouteMain = () => {
     router.push('/');
   };



  return (
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
      <div className='header__log' onClick={handleRouteProfile}>
        <p>ВОЙТИ</p>
      </div>
    </header>
  );
};

export default Header;

import { useRouter } from 'next/router';
import { headerInfoPath } from '../utils/headerPath';

const HeaderInfo = () => {
  const router = useRouter();
  const routerPath = headerInfoPath
    .map((e) => e.path)
    .filter((e) => router.pathname === e);
  
  


  return (
    <>
      {routerPath.length  ? (
        <div className='header-info'>
          <input type='checkbox' id='switch' />
          <label for='switch'>Toggle</label>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default HeaderInfo;

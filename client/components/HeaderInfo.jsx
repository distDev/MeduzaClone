import { useRouter } from 'next/router';
import { headerInfoPath } from '../utils/headerPath';
import { useSelector, useDispatch } from 'react-redux';
import {handleSwitch} from '../store/slices/swithHeaderSlice';

const HeaderInfo = () => {
  
  const dispatch = useDispatch();
  
  const router = useRouter();
  const routerPath = headerInfoPath
    .map((e) => e.path)
    .filter((e) => router.pathname === e);

 

  return (
    <>
      {routerPath.length ? (
        <div className='header-info'>
          <p>По порядку</p>
          <input
            type='checkbox'
            id='switch'
            onClick={() => dispatch(handleSwitch())}
          />
          <label for='switch'>Toggle</label>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default HeaderInfo;

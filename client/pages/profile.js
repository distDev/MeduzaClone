import Link from 'next/link';

const profile = () => {
  return (
    <div className="container main">
      profile
      <Link href='/bookmarks'>
          <a >закладки</a>
      </Link>
    </div>
  );
};

export default profile;

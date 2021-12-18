import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


export default function ProfileMenu({ halndleQuit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const userData = useSelector((state) => state.login.user);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <PermIdentityOutlinedIcon
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className='header-profile-menu'
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          elevation: 0,
          padding: '10px',
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <h4>staver.edc@gmail.com</h4>
        <MenuItem onClick={() => router.push('/profile')}>Профиль</MenuItem>
        <MenuItem onClick={() => router.push(`/bookmarks/${userData.email}`)}>
          Закладки
        </MenuItem>
        <MenuItem onClick={halndleQuit}>Выйти</MenuItem>
      </Menu>
    </div>
  );
}

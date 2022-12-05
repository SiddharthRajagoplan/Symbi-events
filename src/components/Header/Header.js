import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { logout } from '../../features/userSlice';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img src="./SYMBI_header.png" alt="error" />
        <div className="header__search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption
          avatar={true}
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  )
}

export default Header

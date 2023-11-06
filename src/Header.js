import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
       <div className='header__left'>
        <img src="https://tse4.mm.bing.net/th?id=OIP.93lgxRi9ZCjbZcUXglM-gwHaHa&pid=Api&P=0&h=220" alt=""/>
        <div className='header__search'>
            <SearchIcon />
            <input type='text'/>
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
       <HeaderOption avatar="https://media.licdn.com/dms/image/D4D35AQFvXHXXZqYFzw/profile-framedphoto-shrink_100_100/0/1692803065825?e=1699696800&v=beta&t=W1uiDc0klTxzDQ-eZDzqWr5M5yxlY5KQtRAKNXmsULg" title='me'/>

      </div>
    </div>
  )
}

export default Header;

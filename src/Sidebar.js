import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Sidebar() {

    const recentItem=(topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://wallpapercave.com/wp/1IldCgG.jpg' alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Ponne Girish</h2>
        <Link link to="/Profile"><p>Profile</p></Link>
        <h4>ponneGirish2001@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>3000</p>
        </div>
        <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>3500</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
};
export default Sidebar;

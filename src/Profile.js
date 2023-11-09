import { Avatar } from '@mui/material';
import React from 'react'
import './Profile.css';

function Profile() {
  return (
    <div className='profile'>
     <div className='profile__top'>
      <img src='https://wallpapercave.com/wp/1IldCgG.jpg' alt=''  />
      <Avatar className='profile__avatar' />
      <h2>Ponne Girish</h2>
      <p>Profile</p>
      <h4>ponneGirish2001@gmail.com</h4>
     </div>
    </div>
  )
}

export default Profile;

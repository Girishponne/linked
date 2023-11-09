import React from 'react';
import Header from './Header';
import './Notifications.css';
function Notifications() {
  return (
    <div>
      <Header />
      <div className='notifications'>
          <div className='notifications__left'> 
            <h1>Manage your Notifications</h1>
            <p><strong>View Settings</strong></p>
          </div>
          <div className='notifications__middle'>
            <div className='notifications__main'>
              <button>All</button>
              <button>My posts</button>
              <button>Mentions</button>
            </div>
            <div className='notifications__feed'>
               <h1>You have a message from your connection</h1><hr/>
               <h1>Someone viewed your profile</h1><hr/>
               <h1>#Company is hiring matches your profile</h1><hr/>
               <h1>manda started following you</h1><hr/>
               <h1>you have new request</h1>
            </div>
          </div>
          <div className='notifications__right'>
            <h1>Get the latest jobs and industry news</h1>
            <p>Girish explore relevant opportunities with <strong>BlackBerry</strong></p>
          </div>
      </div>
    </div>
  )
}

export default Notifications;

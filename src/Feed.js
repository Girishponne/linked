import React from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ImageIcon from '@mui/icons-material/Image';
import Post from './Post';

function Feed() {
    
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input type='text'/>
                    <button  type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOption Icon={SubscriptionsIcon} title='Videos' color='#E7A33E' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
            </div>
        </div>
         {/* Posts  */}
         {/* {posts.map((post)=>
             <Post />
           )} */}
           <Post name="Ponne Girish"
           description="this is a test"
           message="WOW this worked" />


    </div>
  );
};

export default Feed;

import React from 'react';
import './Mynetwork.css'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MynetworkOption from './MynetworkOption';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import PagesIcon from '@mui/icons-material/Pages';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TagIcon from '@mui/icons-material/Tag';
import Header from './Header';
import { Avatar } from '@mui/material';

function Mynetwork() {
    return (
        <div>
         <Header/>
          <div className='mynetwork'>
            <div className='mynetwork__left'>
              <div className='mynetwork__icons'>
                <h1>Manage my network</h1>
                  <MynetworkOption  Icon={SupervisorAccountIcon} title='Connections' number="500" />
                  <MynetworkOption  Icon={PersonIcon} title='Following & followers' number="700"/>
                  <MynetworkOption  Icon={GroupsIcon} title='Groups' number=" 10" />
                  <MynetworkOption  Icon={EventIcon} title='Events' number="" />
                  <MynetworkOption  Icon={PagesIcon} title='Pages' number="10" />
                  <MynetworkOption  Icon={NewspaperIcon} title='Newsletter' number="5" />
                  <MynetworkOption  Icon={TagIcon} title='Hashtag' number="15" />
                </div>
              </div>
              <div className='mynetwork__right'>
                <h1>People you may know based on your activity</h1>
                <div className='mynetwork__card'>
                  <div className='mynetwork__item'>
                    <img src='https://wallpapercave.com/wp/1IldCgG.jpg' alt='' />
                    <Avatar className='mynetwork__avatar' />
                    <h2>Ponne Girish</h2>
                    <h4>Software</h4>
                    <p>Based on your profile</p>
                    <button>Connect</button>
                  </div>
                  <div className='mynetwork__item'>
                    <img src='https://tse1.mm.bing.net/th?id=OIP.cjzPpWIlNkKSb8WMrTCPAAHaEK&pid=Api&P=0&h=220' alt='' />
                    <Avatar className='mynetwork__avatar' />
                    <h2>Lahari</h2>
                    <h4>Full stack developer</h4>
                    <p>Based on your profile</p>
                    <button>Connect</button>
                  </div>
                  <div className='mynetwork__item'>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.5vLO3zF74xkUoAVzROrNhAHaEK&pid=Api&P=0&h=220' alt='' />
                    <Avatar className='mynetwork__avatar' />
                    <h2>Kiran</h2>
                    <h4>Automation</h4>
                    <p>Based on your profile</p>
                    <button>Connect</button>
                  </div>
                  <div className='mynetwork__item'>
                    <img src='https://tse2.mm.bing.net/th?id=OIP.0ckAlxDV247F_lEeBIESoQHaEK&pid=Api&P=0&h=220' alt='' />
                    <Avatar className='mynetwork__avatar' />
                    <h2>Lokesh Reddy</h2>
                    <h4>Mern stack</h4>
                    <p>Based on your profile</p>
                    <button>Connect</button>
                  </div>
                </div>
              </div>
            </div> 
          </div>
    );
};

export default Mynetwork;

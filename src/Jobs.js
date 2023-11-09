import React from 'react';
import Header from './Header';
import JobsOption from './JobsOption';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SettingsIcon from '@mui/icons-material/Settings';
import NoteIcon from '@mui/icons-material/Note';
import './Jobs.css'

function Jobs() {
  return (
    <div>
      <Header/>
      <div className='jobs'>
          <div className='jobs__left'>
            <div className='jobs__icons'>
              <JobsOption  Icon={BookmarkIcon} title='My jobs'  />
              <JobsOption  Icon={FormatListBulletedIcon} title='Preferences' />
              <JobsOption  Icon={AssignmentTurnedInOutlinedIcon} title='Skill Assessments'  />
              <JobsOption  Icon={StickyNote2Icon} title='Interview prep' />
              <JobsOption  Icon={NoteIcon} title='Resume Builder' />
              <JobsOption  Icon={SmartDisplayIcon} title='Job seeker guidence' />
              <JobsOption  Icon={SettingsIcon} title='Application settings' />
            </div>
          </div>
          <div className='jobs__right'>
            <div className='jobs__header'>
            <h1>Recent job searches</h1>
            <button>Clear</button>
            </div>
            <h2>Python developer</h2>
            <p>Alert on : Hyderabad,Telangana,india . onsite . hybrid</p>
            <hr/>
            <h2>frontend developer</h2>
            <p>Alert on : Bangalore,Karnataka,india . onsite . hybrid</p>
            <hr/>
            <h2>Data Analyst</h2>
            <p>Alert on : Mumbai,india . remote</p>
            <hr/>
            <button>Show more</button>
          </div>
      </div>
    </div>
  );
};

export default Jobs;

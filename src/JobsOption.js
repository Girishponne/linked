import React from 'react';
import './JobsOption.css';

function JobsOption({Icon,title}) {
  return (
    <div className='jobsOption'>
      {Icon && <Icon className='jobsOption__icon'/>}
      <p className='jobsOption__title'>{title}</p>
    </div>
  );
};

export default JobsOption;

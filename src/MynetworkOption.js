import React from 'react';
import './MynetworkOption.css';

function MynetworkOption({Icon,title,number}) {
  return (
    <div className='mynetworkOption'>
      {Icon && <Icon className='mynetworkOption__icon'/>}
      <p className='mynetworkOption__title'>{title}</p>
      <p className='mynetworkOption__para'>{number}</p>
    </div>
  )
}

export default MynetworkOption;

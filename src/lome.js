import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Header from './Header';

const Lome = () => {
  return (
    <div>
        <Header />
        <div style={{display:"flex"}}>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
    </div>
  );
};

export default Lome

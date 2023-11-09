import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Header from './Header';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import Login from './Login';

function Home() {
  const user=useSelector(selectUser)

  return ( 
      <div>
        <Header />
        {user ?(
          <Login /> 
        ) :(
          <div style={{display:"flex"}}>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        )}
       
      </div>
  );
};

export default Home;

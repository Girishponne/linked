import React from 'react';
import './App.css';
// import Header from './Header';
import Mynetwork from './Mynetwork';
import Jobs from './Jobs';
import Messaging from './Messaging';
import Notifications from './Notifications';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
// import Sidebar from './Sidebar';
// import Feed from './Feed';
// import Widgets from './Widgets';
// import Header from './Header';
// import {useSelector} from 'react-redux';
// import {selectUser} from './features/userSlice';
import Login from './Login';
import Profile from './Profile';



function App() {

  return (
    // <>
      <div className="app">

        <Router>
          {/* <Header /> */}
          <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Profile' element={<Profile/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/mynetwork' element={<Mynetwork />} />
            <Route path='/Jobs' element={<Jobs/>} />
            <Route path='/Messaging' element={<Messaging/>} />
            <Route path='/Notifications' element={<Notifications/>} />
          </Routes>
        </Router>
        

      </div>
    // </>
  );
};

export default App;

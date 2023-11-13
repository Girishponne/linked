import React from 'react';
import './App.css';
import Mynetwork from './Mynetwork';
import Jobs from './Jobs';
import Messaging from './Messaging';
import Notifications from './Notifications';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import { Provider } from 'react-redux';
// import store from './Redux/Store';
import Lome from './lome';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './Logout';
import store from './app/store'



function App() {
  const user=useSelector(selectUser);

  return (
    <Provider store={store}>
      <div className="app">
        {/* {user? <Logout/> : <Login/>} */}
        {user ? (
        <Router>
          <Routes>
            {/* <Route path='/register' element={<Register />} /> */}
            <Route path='/home' element={<Lome/>} />
            <Route path='/mynetwork' element={<Mynetwork />} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/Jobs' element={<Jobs/>} />
            <Route path='/Messaging' element={<Messaging/>} />
            <Route path='/Notifications' element={<Notifications/>} />
            <Route path='/Logout' element={<Logout/>} />
          </Routes>
        </Router>
        ):<Login/>}
      </div>
      </Provider>
  );
};

export default App;


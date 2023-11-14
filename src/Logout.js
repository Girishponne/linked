import React from 'react';
import './Logout.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';

function Logout() {
  const user=useSelector(selectUser)

  const dispatch=useDispatch();
  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(logout())

  }

  return (
    <div>
     <Header/>
    <div className='logout'>
      <h1>Welcome <span>{user.name}</span></h1>
      {/* <Link to='/Profile'> <span>view profile</span></Link> */}
      <div className='logout__button'>
      <Link to='/'><button onClick={(e)=>handleLogout(e)}>Logout</button></Link>
      </div>
    </div>
    </div>
  );
};

export default Logout;

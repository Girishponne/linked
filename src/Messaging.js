import React from 'react';
import Header from './Header';
import './Messaging.css';

function Messaging() {
  return (
    <div>
      <Header/>
    <div className='messaging'>
        <div className='messaging__info'>
            <h1>Messaging</h1>
            <hr/>
            <h2>Harideep</h2>
            <p>you:How are you</p>
            <hr/>
            <h2>Bharath</h2>
            <p>He:Hii</p>
            <hr/>
            <h2>Arjun</h2>
            <p>you:What are you doing?</p>
            <hr/>
            <h2>Kohli</h2>
            <p>He:Where are you</p>
            <hr/>
            <h2>Kiran</h2>
            <p>you:hello..!</p>
            <hr/>
        </div>
      </div>
    </div>
  );
};

export default Messaging;

import React,{useState} from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


const Login = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const dispatch=useDispatch();

  const  handleSubmit=(e)=>{
    e.preventDefault();
    
    dispatch(
      login({
      name:name,
      email:email,
      password:password,
      loggedIn: true,

      })
    );
  };

  return (
    <div className='login'>
     <form className='login__form'  onSubmit={(e)=>handleSubmit(e)}>
      <h1>Login Here</h1>
      <input 
          value={name} 
          onChange={(e)=>setName(e.target.value)} 
          placeholder='Full name (required if registering)'
          type='name' />
        <input 
           value={email} 
           onChange={(e)=>setEmail(e.target.value)} 
           placeholder='Email'
           type='email' />
        <input 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          placeholder='Password'
          type='password' />
        <button type="submit" >
          Login
        </button>
      </form>      
    </div>
  )
}

export default Login


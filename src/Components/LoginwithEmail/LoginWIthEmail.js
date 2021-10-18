import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const LoginWIthEmail = () => {
const {handleLogin}=useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(' ');

    const handleEmail=(e)=>{
     setEmail(e.target.value)
    }
    const handlePass=(e)=>{
     setPassword(e.target.value)
    }
    const handleForm = (e) => {
        e.preventDefault()
      handleLogin(email ,password)
    };



    return (
      <div>
        <div className="bg-secondary m-2 p-2 rounded">
          <h3>Please Login</h3>
          <form onSubmit={handleForm} className='w-75 mx-auto'>
            <input
              onBlur={handleEmail}
              className='form-control'
              type='email'
              name='email'
              placeholder='Enter your Email'
              required
            />
            <br />
            <input
            onBlur={handlePass}
              className='form-control'
              type='Password'
              name='password'
              placeholder='Create Passowrd'
              required
            />
            <input className='mt-2 bg-warning btn form-control' type='submit' value='Login' />
          </form>
          <p>
            <Link  className="text-white" to='/register'>Create a Account </Link>
          </p>
        </div>
      </div>
    );
};

export default LoginWIthEmail;
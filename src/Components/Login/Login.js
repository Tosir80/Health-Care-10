import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import {  BiUserCircle } from 'react-icons/bi';
import LoginWIthEmail from '../LoginwithEmail/LoginWIthEmail';
import './Login.css'

const Login = () => {
    const {user,signInUsingGoogle}=useAuth()
// for redirect page previous Route ...
       const location = useLocation();
       const history = useHistory();
       const redirect = location.state?.from || location;

const handleGoogleBtn=()=>{
signInUsingGoogle().then((result)=>{history.push(redirect)})

  }

    return (
      <div className="container">
        <div className='login'>
          <h2 className='py-3'>Welcome to Login</h2>
          <Row className='py-4 justify-content-around align-items-center'>
            <Col>
              <LoginWIthEmail></LoginWIthEmail>
            </Col>
            <Col>
              {user?.email && (
                <div>
                  <h3>
                    <span className='fs-1 text-primary'>
                      <BiUserCircle />{' '}
                    </span>{' '}
                    Your Profile
                  </h3>
                  <div className='card p-2 pt-0 m-5 bg-info text-center'>
                    <div>
                      {' '}
                      <img
                        className='rounded-circle w-50 p-2'
                        src={user?.photoURL}
                        alt=''
                      />
                    </div>
                    <h3> Name : {user?.displayName}</h3>
                    <p>Gmail: {user?.email}</p>
                  </div>
                </div>
              )}
              <button className='btn btn-primary' onClick={handleGoogleBtn}>
                <AiFillGooglePlusCircle className='text-warning fs-1 ' /> Login
                with Google
              </button>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const[email ,setEmail]=useState('')
    const [password ,setPassword]=useState(' ')
    const [error ,setError]=useState( '')
    const{handleRegister}=useAuth()
const handleEmailChange=(e)=>{
setEmail(e.target.value)
}
const handlePasswrdChange=(e)=>{
 setPassword(e.target.value)
 
}

const handleForm=(e)=>{
    e.preventDefault()
    if(password.length<6){
     setError("Password Should be 6 Characters !")
    return
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(String(password))){
        setError(password)
        return
    }
     setError('');
    handleRegister(email,password)
}

    return (
      <Container>
        <Row>
          <Col>
            
            <div className='bg-secondary my-5 py-5 justify-content-around align-content-center'>
              <h3>Please Register</h3>
              <form onSubmit={handleForm} className='w-75 mx-auto'>
                <input
                  className='form-control'
                  onChange={handleEmailChange}
                  type='email'
                  name='email'
                  placeholder='Enter your Email'
                  required
                />
                <br />
                <input
                  className='form-control'
                  onChange={handlePasswrdChange}
                  type='Password'
                  name='password'
                  placeholder='Create Passowrd'
                  required
                />
                <p className='text-danger'> {error}</p>
                <input className='btn btn-warning mt-2'  type='submit' value='Register' />
              </form>
              <p>
                <Link className="text-white mt-2 " to='/login'>Already have a Account </Link>
              </p>
            </div>
          </Col>

          <Col>
          <img src="images/5.jpg" className="img-fluid " alt="" />
          </Col>
        </Row>
      </Container>
    );
};

export default Register;
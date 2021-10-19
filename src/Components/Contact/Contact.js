import React from 'react';
import { IoLocationSharp, MdEmail, AiFillPhone } from 'react-icons/all';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Contact.css'
const Contact = () => {
 const { register, handleSubmit,  } = useForm();
  const onSubmit = data => alert("Thank you");
    return (
      <>
        <Row className='py-4'>
          <Col>
            <div className='contact'>
              <h3>Contact us</h3>
            </div>
          </Col>
          <Col>
            <img src='/images/Contact-us/page-banner.png' alt='' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className='bg-info m-3'>
              <p className='icon'>
                <IoLocationSharp />{' '}
              </p>
              <h5>Our Location:</h5>
              <p> Mirpur,Dhaka,Bangladesh</p>
            </Card>
          </Col>
          <Col>
            <Card className='bg-info m-3'>
              <p className='icon'>
                <MdEmail />
              </p>
              <h5>Email Address:</h5>
              <p> tosiruzzamantosir@gmail.com</p>
            </Card>
          </Col>
          <Col>
            <Card className='bg-info m-3'>
              <p className='icon'>
                <AiFillPhone />
              </p>
              <h5>Phone Number:</h5>
              <p>+8801779794012</p>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={2}>
          <Col className='py-5'>
            <h2>
              Fill In Your Information & We Will Be In Touch As Soon As We Can
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
              <input
                className='form-control'
                defaultValue=''
                placeholder='First Name'
                required
                {...register('example')}
              />
              <br />
              <input
                className='form-control'
                defaultValue=''
                placeholder='Last Name'
                {...register('example')}
                required
              />
              <br />
              <input
                className='form-control'
                defaultValue=''
                type='email'
                placeholder='Enter Email'
                {...register('example')}
                required
              />
              <br />
              <input
                className='form-control'
                defaultValue=''
                placeholder='Phone Number'
                {...register('example')}
                required
              />
              <br />
              <input className='my-1 form-control bg-warning text-white' type='submit' />
            </form>
          </Col>
          <Col>
          <img className="img-fluid" src="images/Contact-us/undraw_Community_re_cyrm.png" alt="" />
          </Col>
        </Row>
      </>
    );
};

export default Contact;
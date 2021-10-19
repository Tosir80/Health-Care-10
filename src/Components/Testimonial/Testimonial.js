import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsFacebook, AiFillTwitterCircle,AiFillLinkedin,BsInstagram } from 'react-icons/all';
const Testimonial = () => {
    return (
      <div className='py-4'>
        <Row className="d-flex justify-content-center align-items-center py-5" xs={1} md={2}> 
          <Col>
            <p className="bg-info rounded p-1"> #We Care For Every Patient</p>
            <h2>Nervous Troubled Attractive Staring Right Anxiously!</h2>
          </Col>
          <Col>
          <img className="img-fluid" src="/images/overview.png" alt="" />
          </Col>
        </Row>

        <h6> Our Dentist</h6>
        <h2>Our Specialized and Experienced Dentist</h2>
        <Row xs={1} md={3}>
          <Col>
            <div className='border p-2'>
              <img
                className='img-fluid'
                src='images/testimonial/doctor-new-3.jpg'
                alt=''
              />
              <h4>Prosthodontics Dentist</h4>
              <div>
                <span>
                  {' '}
                  <BsFacebook />{' '}
                </span>
                <span>
                  {' '}
                  <AiFillTwitterCircle />{' '}
                </span>
                <span>
                  {' '}
                  <AiFillLinkedin />{' '}
                </span>
                <span>
                  {' '}
                  <BsInstagram />{' '}
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <div className='border p-2'>
              <img
                className='img-fluid'
                src='images/testimonial/doctor-new-4.jpg'
                alt=''
              />
              <h4>Dr. Ena Dicrosa</h4>
              <div>
                <span>
                  {' '}
                  <BsFacebook />{' '}
                </span>
                <span>
                  {' '}
                  <AiFillTwitterCircle />{' '}
                </span>
                <span>
                  {' '}
                  <AiFillLinkedin />{' '}
                </span>
                <span>
                  {' '}
                  <BsInstagram />{' '}
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <div className='border p-2'>
              <img
                className='img-fluid'
                src='images/testimonial/doctor-new-6.jpg'
                alt=''
              />
              <h4>Gastroenterologists</h4>
              <div>
                <span>
                  {' '}
                  <BsFacebook />{' '}
                </span>
                <span>
                  {' '}
                  <AiFillTwitterCircle />{' '}
                </span>
                <span>
                  {' '}
                  <AiFillLinkedin />{' '}
                </span>
                <span>
                  {' '}
                  <BsInstagram />{' '}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default Testimonial;
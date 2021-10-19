import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
      <div className="pt-5" style={{ backgroundColor: '#0B2C4B',color:"white" }}>
        <Row xs={1} md={3}>
          <Col>
            <h4>Dental-Care</h4>
            <h6 className="py-1">Location:Dhaka,Bangladesh</h6>
            <h6>Phone : +8801779794012</h6>
            <h6>Email:tosiruzzamantosir@gmail.com</h6>
          </Col>
          <Col>
            <h3 className='text-info'>Support </h3>
            <p>Our Dentist</p>
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Our Pricing</p>
          </Col>
          <Col>
            <h3 className='text-info'> Our Services </h3>
            <p>Cosmetic Dentistry</p>
            <p>General Dentistry</p>
            <p>Certified Dentist</p>
            <p>New Technology</p>
          </Col>
        </Row>
        <Row className='bg-dark text-white py-3'>
          <Col>
            <h4>Dental-Care</h4>
          </Col>
          <Col>
            <p>
              <span>&copy;2021</span> Copyright By Dental-Care
            </p>
          </Col>
        </Row>
      </div>
    );
};

export default Footer;
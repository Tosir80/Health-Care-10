import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Apoinment = () => {
    return (
      <div>
        <Row className='d-flex justify-content-around align-items-center py-5' xs={1} md={2}>
          <Col>
            <p> Keeping Teeth Clean</p>
            <h2>
              {' '}
              The World Best{' '}
              <span className='text-info'>Dental Specialist </span> Treatment
            </h2>
            <p>
              Dentistry, also known as dental medicine and oral medicine, is a
              branch of medicine that consists of the study, diagnosis,
              prevention, and treatment of diseases, disorders, and conditions
              of the oral cavity (the mouth), commonly in the dentition
              (development and arrangement of teeth) as well as the oral mucosa,
              and of adjacent and related structures and tissues, particularly
              in associated maxillofacial (jaw and facial) area
            </p>
            <div className="d-flex justify-content-around">
              <Link to='/login'>
                <button className='btn btn-info'>Book Appointment </button>
              </Link>
              <Link to='/login'>
                <button className='btn btn-warning'>Consult Dentist </button>
              </Link>
            </div>
          </Col>
          <Col>
            <img className='img-fluid' src='/images/main-banner-1.jpg' alt='' />
          </Col>
        </Row>
      </div>
    );
};

export default Apoinment;
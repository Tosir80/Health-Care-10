import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
      <div className='banner'>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100 '
              src='/images/1.jpg'
              alt='First slide'
            />
            <Carousel.Caption className='text-dark bg-info'>
              <h3>DENTAL</h3>
              <p>
                Dental care is the maintenance of healthy teeth and may refer
                to: Oral hygiene, the practice of keeping the mouth and teeth
                clean in order to prevent dental disorders. Dentistry,{' '}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/images/2.jpg'
              alt='Second slide'
            />

            <Carousel.Caption className='text-dark bg-info'>
              <h3>IMPLANTS</h3>
              <p>
                Dental implants can be used to replace a single tooth, several
                teeth,
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/images/3.jpg'
              alt='Third slide'
            />

            <Carousel.Caption className='text-dark bg-info'>
              <h3>DENTISTRY</h3>
              <p>
                Dentistry is the diagnosis, treatment, and prevention of
                conditions, disorders,.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;
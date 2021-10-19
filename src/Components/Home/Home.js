import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Apoinment from '../Testimonial/Apoinment/Apoinment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Container>
          <Services></Services>
          <Testimonial></Testimonial>
          <Apoinment></Apoinment>
        </Container>
      </div>
    );
};

export default Home;
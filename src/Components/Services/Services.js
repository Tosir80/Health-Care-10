import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services ,setServices] =useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res =>res.json())
        .then(data=>setServices(data))
    },[])
    return (
      <div className='py-5 mt-3'>
        <h2 className='text-primary'>OUR <span className="text-warning">SERVICES</span></h2>
        <Row xs={1} md={3} lg={4}>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </div>
    );
};

export default Services;
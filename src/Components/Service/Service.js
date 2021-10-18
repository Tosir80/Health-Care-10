import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { id,name, description, img } = service;
    const url=`service/${id}`
    return (
      <Col>
        <div className='p-2 bg-primary m-2 rounded text-white'>
          <img src={img} className='img-fluid' alt='' />
          <h2 className="pt-2">{name}</h2>
          <p>{description.slice(0,100)}</p>
          <Link to={url}>
            <button className='btn btn-warning'>Know More</button>
          </Link>
        </div>
      </Col>
    );
};

export default Service;
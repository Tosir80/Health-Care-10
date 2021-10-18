import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className=''>
        <img src='/images/404.jpg' alt='' />
        <div>
          <Link to='/home'><button className="btn btn-warning">Go back</button></Link>
        </div>
      </div>
    );
};

export default NotFound;
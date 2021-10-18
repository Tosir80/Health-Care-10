import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    const[store ,setStore] =useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setStore(data))
    },[])
const matchData= store.find(data=>data.id==serviceId)

    return (
      <div className="py-4"> 
          <h2>Let's see About <span className="text-primary">{matchData?.name}</span></h2>
        <div className='w-75 mx-auto m-3 bg-info p-3'>
          <img className='img-fluid' src={matchData?.img} alt='' />
          <h3 className='pt-2 text-white'>{matchData?.name}</h3>
          <p>{matchData?.description}</p>
          <Link to='/home'>
            <button class='btn btn-warning'>Go to Home</button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceDetail;
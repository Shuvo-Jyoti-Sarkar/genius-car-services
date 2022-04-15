import React from 'react';
import sleeping from '../../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='text-center' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;
import React from 'react';
import preloader from './../../assets/image/preloader.svg'

const Preloader = () => {
  return (
    <div className='preloader'>
      <img src={preloader} alt=''/>
    </div>
  );
};

export default Preloader;

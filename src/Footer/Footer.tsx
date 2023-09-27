import React from 'react';
import logo from './logo.png';

function Footer() {
  return (
    <div className='bg-black flex text-white py-8 px-4 lg:px-12'>
      <div className='container mx-auto text-center'>
        <h3 className='text-xl lg:text-2xl font-bold mb-4'>
          Leading the charge for industries!
        </h3>
        <div className='flex flex-wrap justify-center  -mx-2'>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-2 hover:transform hover:-scale-y-100 mb-4 opacity-50 hover: hover:opacity-100 hover:transform-scale-50  ' >
              <img src={logo} alt='logo' className='w-full' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

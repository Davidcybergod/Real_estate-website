import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

import { RiSearch2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';


const Banner = () => {
  const navigate = useNavigate();
  const handleSearchClick = async(e) => {
    navigate('/search')
  }

  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-5xl font-semibold leading-none mb-6'> {/* Fixed class names */}
            <span>Find</span> Your dream house with us.
          </h1>
          
          <p>
            Welcome to my borey
          </p>
          <button onClick={handleSearchClick} className='mt-20 bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg -20 '>
            <RiSearch2Line />
          </button>
        </div>
        <img src={Image} alt='' />
        
      </div>
      <div>
        
      </div>
      
      
     {/* <Search /> Include the Search component */}
    </section>
  );
};

export default Banner;

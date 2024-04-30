import React from 'react';
import { data } from './mockData';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Slider = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideright = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }; 

  return ( 
    <div className='flex justify-center'>
      <div className='w-full '>
        <div className='text-center'>
             <h1 className='text-5xl md:text-6xl font-bold'>Not Sure What You Want?</h1>
             <h1 className='text-3xl py-6'>Find Some Inspiration</h1>
        </div>

        <div className='relative flex items-center'>
            <div className=' -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-grey/20 text-black cursor-pointer ' >
            <MdChevronLeft onClick={slideLeft} size={40} />
            </div>
        
          <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
            {data.map((item) => (
              <img className='w-[350px] h-[550px] inline-block p-2 pb-20 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt="/" />
            ))}
          </div>
          <div className=' -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-grey/20 text-black cursor-pointer'>
          <MdChevronRight onClick={slideright} size={40}/>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Slider;


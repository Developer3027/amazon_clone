import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div className=''>
          <img
            loading='lazy'
            src='https://dev3027public.s3.amazonaws.com/amazon_clone/Frame-1.svg'
            alt='Amazon SAA Exam Notes'
          />
        </div>
        <div className=''>
          <img
            loading='lazy'
            src='https://dev3027public.s3.amazonaws.com/amazon_clone/Frame+5.svg'
            alt='Amazon SAA practice questions'
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

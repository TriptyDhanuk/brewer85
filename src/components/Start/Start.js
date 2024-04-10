import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "./Start.css";
import Logo from '../../images/logo.jpg';
import Prawn from '../../images/prawn.png';
import Plate from '../../images/plate.png';
import Leaf from '../../images/leaf.png';

// Import Raleway font from Google Fonts
import '@fontsource/raleway';


const Start = () => {
  return (
    <>
      <div className="splash-bg h-screen bg-gray-200">
        <div className="splash-img h-full overflow-hidden w-screen bg-cover bg-[right_bottom] lg:bg-[center]">
          <div className='flex justify-center items-center h-screen px-6'>
            <div className='md:min-w-[460px]'>
              <div className='relative z-[1]'>
                <div className='flex flex-col justify-center items-center gap-y-10 p-10 border rounded-xl backdrop-blur-lg'>
                  <div className="logo-container -mt-24 md:-mt-36 w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden d-flex justify-center items-center">
                    <img src={Logo} alt="Logo" className='w-full h-full object-cover' />
                  </div>

                  <div className=''>
                    <a href="/login" className='inline-block py-3 px-10 md:py-6 md:px-16 text-base md:text-2xl font-semibold text-white rounded-[3.125rem] bg-gray-950 hover:bg-gray-900 no-underline hover:no-underline text-nowrap'>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='absolute bottom-0 right-0'>
                  <img src={Leaf} alt="Leaf"/>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;

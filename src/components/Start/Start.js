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
      <div className='splash-bg h-screen bg-gray-200'>
        <div className='splash-img h-full overflow-hidden w-screen bg-cover bg-[right_bottom] xl:bg-[center]'>
          {/* <div className='bottom-img absolute -left-10 -bottom-10 w-96'>
            <img src={Plate} alt="Item2" />
          </div>
          <div className='absolute lg:top-2/4 lg:-translate-y-1/2 right-0 top-0'>
            <img src={Prawn} alt="Prawn"/>
          </div> */}
          <div className='flex justify-center items-end h-screen'>
            <div className='w-6/12'>
              <div className='flex flex-col justify-center items-center gap-y-10 pb-[20vh] relative z-10'>
                <div className='logo-container w-32 h-32 lg:w-56 lg:h-56 rounded-full overflow-hidden d-flex justify-center items-center'>
                  <img src={Logo} alt="Logo" className='w-full h-full object-cover' />
                </div>

                <div className=''>
                  <a href="/login" className='inline-block py-3 px-10 lg:py-6 lg:px-16 text-base lg:text-2xl font-semibold text-white rounded-[3.125rem] bg-gray-950 hover:bg-gray-900 no-underline hover:no-underline text-nowrap'>
                    Get Started
                  </a>
                </div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <img src={Leaf} alt="Leaf"/>
              </div>
            </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default Start;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "./Start.css";
import Logo from '../../images/logo.jpg';
import Prawn from '../../images/prawn.png';
import Plate from '../../images/plate.png';

// Import Raleway font from Google Fonts
import '@fontsource/raleway';


const Start = () => {
  return (
    <>
      <div className='splash-bg h-screen bg-gray-200'>
        <div className='splash-img h-full'>
          <div className='bottom-img absolute -left-10 -bottom-10 w-96'>
            <img src={Plate} alt="Item2" />
          </div>
          <div className='absolute lg:top-2/4 lg:-translate-y-1/2 -right-11 -top-0'>
            <img src={Prawn} alt="Prawn"/>
          </div>
          <div className='logo-container w-32 h-32 rounded-full overflow-hidden d-flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <img src={Logo} alt="Logo" />
          </div>

          <div className='logo-container absolute top-[calc(50%+8rem)] left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <a href="/login" className='inline-block py-3 px-10 text-white rounded-[3.125rem] bg-gray-950 hover:bg-gray-900 no-underline hover:no-underline text-nowrap'>
            Get Started
          </a></div>
      </div>
      </div>
    </>
  );
};

export default Start;

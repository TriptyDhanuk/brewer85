import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/fishItem.png';
import Leaf from '../../images/leaf.png';

import '@fontsource/raleway';
const OTPDigitInput = styled.input`
  
  border-color: ${({ wrong }) => (wrong ? 'red' : '#ccc')}; /* Apply red border if wrong */
  border-radius: 5px;
`;

const LoginOTP = () => {
  const inputs = useRef([]);
  const [otp, setOtp] = useState('');
  const [showError, setShowError] = useState(false);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    const nextIndex = index + 1;
    const prevIndex = index - 1;
  
    if (value !== '' && nextIndex < inputs.current.length) {
      inputs.current[nextIndex].focus();
    }
  
    if (value === '' && prevIndex >= 0) {
      inputs.current[prevIndex].focus();
    }
  
    setOtp(values => {
      const updatedOtp = [...values];
      updatedOtp[index] = value;
      return updatedOtp.join('');
    });
    setShowError(false);
  };
  
  const handleEnjoyFoodClick = () => {
    if (!otp || otp !== '111111') {
      setShowError(true);
    } else {
      if (!showError) {
        window.location.href = "/home"; 
      }
    }
  };
  

  return (
    <>
      <div className='splash-bg h-screen bg-gray-200'>
        <div className='splash-img h-full overflow-hidden w-screen bg-cover bg-[right_bottom] lg:bg-[center]'>
          <div className='flex justify-center items-center h-screen px-6'>
            <div className='md:min-w-[460px] lg:pt-28 pt-16'>
              <div className='relative z-[1]'>
                <div className='flex flex-col justify-center items-center gap-y-10 p-10 border rounded-xl backdrop-blur-lg '>
                  <div className='logo-container -mt-24 md:-mt-36 w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden d-flex justify-center items-center'>
                    <img src={Logo} alt="Logo" className='w-full h-full object-cover' />
                  </div>

                  <div className='flex flex-col gap-y-6 relative z-[1] text-center'>
                    <div className='flex flex-col items-center md:gap-y-4'>
                      <div className='text-lg md:text-2xl font-semibold'>Please Enter Your Code</div>
                      <small className='text-lg md:text-2xl font-semibold'>We sent a 6-digit OTP to +971****0000</small>
                    </div>
                    <div className='flex justify-center gap-1'>
                      {[...Array(6)].map((_, index) => (
                        <OTPDigitInput
                          key={index}
                          type="text"
                          maxLength="1"
                          ref={(ref) => (inputs.current[index] = ref)}
                          onChange={(e) => handleInputChange(index, e)}
                          wrong={showError} // Apply wrong styling if showError is true
                          className='w-10 h-12 md:w-16 md:h-16 text-base md:text-2xl font-semibold text-center border border-solid border-slate-400 focus:outline-none'
                        />
                      ))}
                    </div>
            
                    <button onClick={handleEnjoyFoodClick} className='inline-block py-3 px-10 md:py-6 md:px-16 text-base md:text-2xl font-semibold text-white rounded-[3.125rem] bg-gray-950 hover:bg-gray-900 no-underline hover:no-underline text-nowrap'>Enjoy Food</button>
            
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='absolute bottom-0 right-0'>
            <img src={Leaf} alt="Leaf"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOTP;

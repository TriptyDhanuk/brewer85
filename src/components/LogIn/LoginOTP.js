import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/fishItem.png';
import Leaf from '../../images/leaf.png';

import '@fontsource/raleway';
const OTPDigitInput = styled.input`
  width: 3rem;
  height: 3rem;
  margin: 0 5px;
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid ${({ wrong }) => (wrong ? 'red' : '#ccc')}; /* Apply red border if wrong */
  border-radius: 5px;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
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
        <div className='splash-img h-full overflow-hidden w-screen bg-cover bg-[right_bottom] xl:bg-[center]'>
          <div className='flex justify-center items-end h-screen'>
            <div className='md:w-6/12 w-10/12'>
              <div className='flex flex-col justify-center items-center gap-y-10 pb-[20vh]'>
                <div className='logo-container w-32 h-32 rounded-full overflow-hidden d-flex justify-center items-center'>
                  <img src={Logo} alt="Logo" />
                </div>

                <div className='flex flex-col gap-y-5 relative z-[1] text-center'>
                  <div className='text-lg font-semibold'>Please Enter Your Code</div>
                  <small className='text-base font-medium'>We sent a 6-digit OTP to +971****0000</small>
                  <div>
                    {[...Array(6)].map((_, index) => (
                      <OTPDigitInput
                        key={index}
                        type="text"
                        maxLength="1"
                        ref={(ref) => (inputs.current[index] = ref)}
                        onChange={(e) => handleInputChange(index, e)}
                        wrong={showError} // Apply wrong styling if showError is true
                      />
                    ))}
                  </div>
          
                  <button onClick={handleEnjoyFoodClick} className='inline-block py-3 px-10 text-white rounded-[3.125rem] bg-gray-950 hover:bg-gray-900 no-underline hover:no-underline text-nowrap'>Enjoy Food</button>
          
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

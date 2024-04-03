import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/hamBurg.png';
import CountryLogo from '../../images/country_logo.png';
import Leaf from '../../images/leaf.png';
import '@fontsource/raleway';

const LoginPhoneNo = () => {
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [error, setError] = useState('');

  const handleGetOTP = () => {
    if (!phoneNumber.trim() || phoneNumber === '' || phoneNumber.length!==10 ) {
      setError('Please provide a valid phone number');
    } else {
      setError('');
      window.location.href = "/logInOtp";
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    const inputValue = event.target.value;
    
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }

    if (inputValue.length >= 10) {
      event.preventDefault();
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
                  <div className='text-lg font-semibold'>Please Insert your Phone no</div>
                  <div>
                    <div className='flex gap-x-2 mb-2'>
                      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option value="">+1</option>
                        <option value="">+91</option>
                        <option value="" selected>+971</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Enter your phone no" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        onKeyPress={handleKeyPress} // Prevent non-numeric characters
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                    {error && <span className='text-red-500'>{error}</span>}
                  </div>
                </div>
                <div className=''>
                  <button onClick={handleGetOTP} className='inline-block py-3 px-10 text-white rounded-[3.125rem] bg-gray-950 hover:bg-gray-900 no-underline hover:no-underline text-nowrap'>Get OTP</button>
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

export default LoginPhoneNo;

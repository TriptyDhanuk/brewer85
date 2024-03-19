import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/hamBurg.png';
import CountryLogo from '../../images/country_logo.png';
import '@fontsource/raleway';

const GreyBackground = styled.div`
  background-color: #c7c8cc;
  padding: 2rem;
  text-align: center;
  height: 90vh; /* Set height to 90% of the viewport height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to the top of the container */
  align-items: center;
  position: relative; /* Add relative positioning to use absolute positioning for the background image */
`;

const LogoContainer = styled.div`
  margin-top: 2rem;
  z-index: 1;
`;

const LogoImage = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    height: 6rem;
    width: 6rem;
  }
`;

const GetStartedButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 25px;
  width: 10rem;
  height: 3rem;
  font-size: 1.2rem;
  margin-top: 10px;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  transition: background-color 0.3s;
  z-index: 1;

  &:hover {
    background-color: #444; /* Darken button color on hover */
  }

  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  bottom: 2px; /* Adjusted position to set it at the bottom of the button */
  width: 20rem; /* Adjusted size to make it smaller */
  height: 18rem; /* Adjusted size to make it smaller */
  background-color: transparent;
  background-image: url(${Item1});
  background-size: contain; 
  background-position: center;
  background-repeat: no-repeat; 
  opacity: 1;
  z-index: 1;
`;

const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 20px; /* Added margin-bottom */
  z-index:1;
`;

const MobileInput = styled.input`
  width: 20rem;
  padding: 1rem;
  border-radius: 25px;
  border: 1px solid #ccc;
  background-image: url(${CountryLogo});
  background-size: 50px;
  background-position: 0px center;
  background-repeat: no-repeat;
  padding-left: 70px; /* Adjusted padding to add space after the country icon */
  font-size: 1.2rem;
  z-index: 1;

  /* Add other styles as needed */

  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 80%;
    max-width: 20rem;
    padding-left: 60px; /* Adjusted padding for smaller screens */
  }

  /* Media query for even smaller screens */
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 90%;
    padding-left: 50px; /* Adjusted padding for even smaller screens */
  }
`;



const PhoneNumberText = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px; /* Added margin-bottom */
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;

const LoginPhoneNo = () => {
  const [phoneNumber, setPhoneNumber] = useState('+971' ); 
  const [error, setError] = useState('');

  const handleGetOTP = () => {
    if (!phoneNumber.trim() || phoneNumber === '+971') {
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

    if (inputValue.length >= 14) {
      event.preventDefault();
    }
  };
  

  return (
    <>
      <GreyBackground className='!h-screen'>
        <BackgroundImage />
        <LogoContainer>
          <LogoImage src={Logo} alt="Logo" />
        </LogoContainer>

        <InputButtonContainer>
          <PhoneNumberText>Please Insert your Phone no</PhoneNumberText>
          <MobileInput
            type="tel"
            placeholder="Enter your phone no" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyPress={handleKeyPress} // Prevent non-numeric characters

          />
          {error && <ErrorText>{error}</ErrorText>}
          <GetStartedButton onClick={handleGetOTP}>Get OTP</GetStartedButton>
        </InputButtonContainer>
      </GreyBackground>
    </>
  );
};

export default LoginPhoneNo;

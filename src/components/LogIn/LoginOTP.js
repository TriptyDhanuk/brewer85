import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/fishItem.png';

import '@fontsource/raleway';

const GreyBackground = styled.div`
  background-color: #c7c8cc;
  padding: 2rem;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
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
  margin-top: 2rem; /* Adjusted margin for better positioning */
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  transition: background-color 0.3s;
  z-index: 1;

  &:hover {
    background-color: #444;
  }

  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  bottom: 2px;
  width: 24rem;
  height: 24rem;
  background-color: transparent;
  background-image: url(${Item1});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
  z-index: 1;
`;

const InputButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  z-index: 1;
`;

const TextLine = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SmallerTextLine = styled.div`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const OTPContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem; /* Adjusted margin for better spacing */
`;

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
      <GreyBackground>
        <BackgroundImage />
        <LogoContainer>
          <LogoImage src={Logo} alt="Logo" />
        </LogoContainer>

        <InputButtonContainer>
          <TextLine>Please Enter Your Code</TextLine>
          <SmallerTextLine>We sent a 6-digit OTP to +971****0000</SmallerTextLine>
          <OTPContainer>
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
          </OTPContainer>
          
            <GetStartedButton onClick={handleEnjoyFoodClick}>Enjoy Food</GetStartedButton>
          
        </InputButtonContainer>
      </GreyBackground>
    </>
  );
};

export default LoginOTP;

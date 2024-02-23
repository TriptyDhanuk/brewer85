import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/thankU.png';

import '@fontsource/raleway';

const GreyBackground = styled.div`
  background-color: #c7c8cc;
  padding: 2rem;
  text-align: center;
  min-height: 100vh; /* Changed to min-height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden; /* Prevent scrolling */
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
  width: 15rem;
  height: 3rem;
  font-size: 1.2rem;
  margin-top: 2rem; /* Adjusted margin for better positioning */
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  transition: background-color 0.3s;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 10rem;
    height: 2.5rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 8rem;
    height: 2.5rem;
    font-size: 0.8rem;
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

  @media screen and (max-width: 768px) {
    width: 30rem;
    height: 30rem;
  }

  @media screen and (max-width: 480px) {
    width: 25rem;
    height: 25rem;
  }
`;

const InputButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  z-index: 1;

  @media screen and (max-width: 768px) {
    margin-top: 20%;
  }

  @media screen and (max-width: 480px) {
    margin-top: 20%;
  }
`;

const TextLine = styled.div`
  font-size: 1.5rem; /* Bigger font size */
  font-weight: bold; /* Bold font weight */
  margin-bottom: 10px;
`;

const SmallerTextLine = styled.div`
  font-size: 1rem; /* Smaller font size */
  margin-bottom: 10px;
`;

const SmallestTextLine = styled.div`
  font-size: 0.8rem; /* Smallest font size */
  margin-bottom: 10px;
`;

const ThankYou = () => {
  const handleEnjoyFoodClick = () => {
    window.location.href = "/home";
  };

  return (
    <>
      <GreyBackground>
        <BackgroundImage />
        <LogoContainer>
          <LogoImage src={Logo} alt="Logo" />
        </LogoContainer>

        <InputButtonContainer>
          <TextLine>Thank You</TextLine>
          <SmallerTextLine>For your order</SmallerTextLine>
          <SmallestTextLine>It is getting cooked</SmallestTextLine>
          <GetStartedButton onClick={handleEnjoyFoodClick}>Make Payment</GetStartedButton>
        </InputButtonContainer>
      </GreyBackground>
    </>
  );
};

export default ThankYou;

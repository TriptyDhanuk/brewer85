import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/pngwing.com.png';

// Import Raleway font from Google Fonts
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
  justify-content: space-between;
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
  margin-bottom: 10rem;
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
  top: -7rem;
  right: 11rem; 
  width: 30rem;
  height: 40rem;
  background-color: transparent; 
  background-image: url(${Item1});
  background-size: cover;
  background-position: top right;
  opacity: 1;
  z-index: 1; 
  transform: rotate(30deg); 

  @media screen and (max-width: 768px) {
    top: 0rem;
    right: 5rem;
    width: 30rem;
    height: 40rem;
    transform: rotate(30deg);
  }

  @media screen and (max-width: 480px) {
    top: -3rem;
    right: 2rem;
    width: 15rem;
    height: 20rem;
    transform: rotate(20deg);
  }
`;

const Start = () => {
  return (
    <>
      <GreyBackground>
        <BackgroundImage />
        <LogoContainer>
          <LogoImage src={Logo} alt="Logo" />
        </LogoContainer>
        <GetStartedButton>Get Started</GetStartedButton>
      </GreyBackground>
    </>
  );
};

export default Start;



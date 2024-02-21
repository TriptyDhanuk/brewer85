// import React,  { useRef } from 'react';
// import styled from 'styled-components';
// import Logo from '../../images/logo.jpg';
// import Item1 from '../../images/pngwing.com.png';
// import CountryLogo from '../../images/country_logo.png'; 

// import '@fontsource/raleway';

// const GreyBackground = styled.div`
//   background-color: #c7c8cc;
//   padding: 2rem;
//   text-align: center;
//   height: 100vh; /* Adjusted height for better visibility */
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   position: relative; 
// `;

// const LogoContainer = styled.div`
//   margin-top: 2rem;
//   z-index: 1;
// `;

// const LogoImage = styled.img`
//   height: 8rem;
//   width: 8rem;
//   border-radius: 50%;

//   @media screen and (max-width: 768px) {
//     height: 6rem;
//     width: 6rem;
//   }
// `;

// const GetStartedButton = styled.button`
//   background-color: #000;
//   color: #fff;
//   border: none;
//   border-radius: 25px;
//   width: 10rem;
//   height: 3rem;
//   font-size: 1.2rem;
//   margin-top: 10px;
//   cursor: pointer;
//   font-family: 'Raleway', sans-serif;
//   transition: background-color 0.3s;
//   z-index: 1;

//   &:hover {
//     background-color: #444; 
//   }

//   @media screen and (max-width: 768px) {
//     width: 8rem;
//     height: 2.5rem;
//     font-size: 1rem;
//   }
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: -7rem;
//   right: 5rem;
//   width: 30rem;
//   height: 40rem;
//   background-color: transparent;
//   background-image: url(${Item1});
//   background-size: cover;
//   background-position: top right;
//   opacity: 1;
//   z-index: 1;
//   transform: rotate(30deg);

//   @media screen and (max-width: 768px) {
//     top: 0rem;
//     right: 5rem;
//     width: 30rem;
//     height: 40rem;
//     transform: rotate(30deg);
//   }

//   @media screen and (max-width: 480px) {
//     top: -3rem;
//     right: 2rem;
//     width: 15rem;
//     height: 20rem;
//     transform: rotate(20deg);
//   }
// `;

// const InputButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 10%; /* Adjusted margin for better positioning */
//   margin-bottom: 20px; 
//   z-index: 1;
//   text-align: center;
//   font-family: 'Raleway', sans-serif;
//   font-weight: bold;
// `;

// const TextLine = styled.div`
//   font-size: 1.2rem;
//   margin-bottom: 10px;
// `;
// const SmallerTextLine = styled.div`
//   font-size: 0.8rem; /* Adjust the font size as needed */
//   margin-bottom: 10px;
// `;

// const OTPContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 10px;
// `;

// const OTPDigitInput = styled.input`
//   width: 3rem;
//   height: 3rem;
//   margin: 0 5px;
//   text-align: center;
//   font-size: 1.5rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   outline: none;

//   @media screen and (max-width: 768px) {
//     width: 2.5rem;
//     height: 2.5rem;
//     font-size: 1.2rem;
//   }
// `;

// const LoginOTP = () => {
//     const inputs = useRef([]);

//   const handleInputChange = (index, event) => {
//     const value = event.target.value;
//     const nextIndex = index + 1;
//     const prevIndex = index - 1;

//     if (value !== '' && nextIndex < inputs.current.length) {
//       inputs.current[nextIndex].focus();
//     }

//     if (value === '' && prevIndex >= 0) {
//       inputs.current[prevIndex].focus();
//     }
//   };
//   return (
//     <>
//       <GreyBackground>
//         <BackgroundImage />
//         <LogoContainer>
//           <LogoImage src={Logo} alt="Logo" />
//         </LogoContainer>

//         <InputButtonContainer>
//           <TextLine>Please Enter Your Code</TextLine>
//           <SmallerTextLine>We sent a 6-digit OTP to +971****0000</SmallerTextLine>
//           <OTPContainer>
//             <OTPDigitInput
//               type="text"
//               maxLength="1"
//               ref={(ref) => (inputs.current[0] = ref)}
//               onChange={(e) => handleInputChange(0, e)}
//             />
//             <OTPDigitInput
//               type="text"
//               maxLength="1"
//               ref={(ref) => (inputs.current[1] = ref)}
//               onChange={(e) => handleInputChange(1, e)}
//             />
//             <OTPDigitInput
//               type="text"
//               maxLength="1"
//               ref={(ref) => (inputs.current[2] = ref)}
//               onChange={(e) => handleInputChange(2, e)}
//             />
//             <OTPDigitInput
//               type="text"
//               maxLength="1"
//               ref={(ref) => (inputs.current[3] = ref)}
//               onChange={(e) => handleInputChange(3, e)}
//             />
//             <OTPDigitInput
//               type="text"
//               maxLength="1"
//               ref={(ref) => (inputs.current[4] = ref)}
//               onChange={(e) => handleInputChange(4, e)}
//             />
//             <OTPDigitInput
//               type="text"
//               maxLength="1"
//               ref={(ref) => (inputs.current[5] = ref)}
//               onChange={(e) => handleInputChange(5, e)}
//             />
//           </OTPContainer>
//           <GetStartedButton>Enjoy Food</GetStartedButton>
//         </InputButtonContainer>
//       </GreyBackground>
//     </>
//   );
// };

// export default LoginOTP;

import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/fishItem.png';

import '@fontsource/raleway';

const GreyBackground = styled.div`
  background-color: #c7c8cc;
  padding: 2rem;
  text-align: center;
  height: 100vh; /* Adjusted height for better visibility */
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
  margin-top: 10px;
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
  bottom: 10px; /* Adjusted position to set it at the bottom of the button */
  width: 15rem; /* Adjusted size to make it smaller */
  height: 15rem; /* Adjusted size to make it smaller */
  background-color: transparent;
  background-image: url(${Item1});
  background-size: contain; /* Adjusted to show the full image inside the box */
  background-position: center;
  background-repeat: no-repeat; /* Ensure image is not repeated */
  opacity: 1;
  z-index: 1;
`;


const InputButtonContainer = styled.div`
  position: relative; /* Make it relative to position the image */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%; /* Adjusted margin for better positioning */
  margin-bottom: 20px; 
  z-index: 1;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
`;

const TextLine = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;
const SmallerTextLine = styled.div`
  font-size: 0.8rem; /* Adjust the font size as needed */
  margin-bottom: 10px;
`;

const OTPContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const OTPDigitInput = styled.input`
  width: 3rem;
  height: 3rem;
  margin: 0 5px;
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid #ccc;
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
              />
            ))}
          </OTPContainer>
          <Link to="/home"> {/* Use Link for redirection */}
            <GetStartedButton>Enjoy Food</GetStartedButton>
          </Link>
        </InputButtonContainer>
      </GreyBackground>
    </>
  );
};

export default LoginOTP;



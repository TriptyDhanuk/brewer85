// import React from 'react';
// import styled from 'styled-components';
// import Logo from '../../images/logo.jpg';
// import Item1 from '../../images/pngwing.com.png';
// import Item2 from '../../images/item2.png';

// // Import Raleway font from Google Fonts
// import '@fontsource/raleway';

// const GreyBackground = styled.div`
//   background-color: #c7c8cc;
//   padding: 2rem;
//   text-align: center;
//   height: 90vh; /* Set height to 90% of the viewport height */
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start; /* Align content to the top of the container */
//   align-items: center;
//   position: relative; /* Add relative positioning to use absolute positioning for the background image */
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
//     background-color: #444; /* Darken button color on hover */
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

// const Item2Image = styled.img`
//   position: absolute;
//   bottom: -1rem;
//   left: 3rem;
//   width: 25rem;
//   height: 25rem;
//   z-index: 1;
// `;

// const InputButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 18%;
//   margin-bottom: 20px; /* Added margin-bottom */
// `;

// const MobileInput = styled.input`
//   width: 20rem;
//   padding: 1rem;
//   border-radius: 25px;
//   border: 1px solid #ccc; 
// `;

// const PhoneNumberText = styled.div`
//   font-size: 1.2rem;
//   margin-bottom: 10px; /* Added margin-bottom */
// `;

// const LoginPhoneNo = () => {
//   return (
//     <>
//       <GreyBackground>
//         <BackgroundImage />
//         <Item2Image src={Item2} alt="Item2" />
//         <LogoContainer>
//           <LogoImage src={Logo} alt="Logo" />
//         </LogoContainer>

//         <InputButtonContainer>
//           {/* Text for inserting phone number */}
//           <PhoneNumberText>Please Insert your Phone no</PhoneNumberText>
//           {/* Input field for mobile number */}
//           <MobileInput type="tel" Placeholder="+971"/>
//           {/* Button for OTP */}
//           <GetStartedButton>Get OTP</GetStartedButton>
//         </InputButtonContainer>
//       </GreyBackground>
//     </>
//   );
// };

// export default LoginPhoneNo;

import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.jpg';
import Item1 from '../../images/pngwing.com.png';
import Item2 from '../../images/item2.png';
import CountryLogo from '../../images/country_logo.png'; // Import the country logo image

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
  top: -7rem;
  right: 5rem;
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

const Item2Image = styled.img`
  position: absolute;
  bottom: -1rem;
  left: 3rem;
  width: 25rem;
  height: 25rem;
  z-index: 1;
`;

const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18%;
  margin-bottom: 20px; /* Added margin-bottom */
`;

const MobileInput = styled.input`
  width: 20rem;
  padding: 1rem;
  border-radius: 25px;
  border: 1px solid #ccc;
  background-image: url(${CountryLogo}); /* Set the country logo as background image */
  background-size: 50px; /* Set the size of the country logo */
  background-position: 0px center; /* Position the country logo */
  background-repeat: no-repeat; /* Ensure the logo doesn't repeat */
  padding-left: 50px; /* Adjust padding to accommodate the country logo */
`;

const PhoneNumberText = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px; /* Added margin-bottom */
`;

const LoginPhoneNo = () => {
  return (
    <>
      <GreyBackground>
        <BackgroundImage />
        <LogoContainer>
          <LogoImage src={Logo} alt="Logo" />
        </LogoContainer>

        <InputButtonContainer>
          {/* Text for inserting phone number */}
          <PhoneNumberText>Please Insert your Phone no</PhoneNumberText>
          {/* Input field for mobile number with country logo */}
          <MobileInput type="tel" Placeholder=" +971" />
          {/* Button for OTP */}
          <GetStartedButton>Get OTP</GetStartedButton>
        </InputButtonContainer>
      </GreyBackground>
    </>
  );
};

export default LoginPhoneNo;

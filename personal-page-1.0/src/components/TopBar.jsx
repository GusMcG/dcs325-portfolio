import React from 'react';
import styled from 'styled-components';
import usaFlag from '../assets/flag-usa.png';
import maineFlag from '../assets/flag-maine.png';
import californiaFlag from '../assets/flag-california.png';

const TopBarContainer = styled.div`
  background-color: #f5f5f5;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FlagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Flag = styled.img`
  height: 30px;
  width: auto;
`;

const Name = styled.div`
  font-family: 'Actor', sans-serif;
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: all 0.3s ease;
  }
`;

const ContactButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Actor', sans-serif;
  
  &:hover {
    background-color: #444;
  }
`;

const TopBar = ({ pageName }) => {
  return (
    <TopBarContainer>
      <LeftSection>
        <FlagContainer>
          <Flag src={usaFlag} alt="USA Flag" />
          <Flag src={maineFlag} alt="Maine Flag" />
          <Flag src={californiaFlag} alt="California Flag" />
        </FlagContainer>
        <Name>Gus McGaraghan</Name>
      </LeftSection>
      
      <MenuButton>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      
      <ContactButton>Contact</ContactButton>
    </TopBarContainer>
  );
};

export default TopBar; 
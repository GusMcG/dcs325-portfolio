import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: radial-gradient(circle at center, rgb(14, 116, 144) 0%, rgb(8, 145, 178) 100%);
  overflow-y: auto;
`;

const MainContent = styled.main`
  padding: 2rem;
  padding-top: calc(10vh + 2rem);
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContentBox = styled.div`
  background-color: rgb(246, 241, 241);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-family: 'Actor', sans-serif;
  font-size: 3rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const Home = () => {
  return (
    <HomeContainer>
      <TopBar pageName="home" />
      <MainContent>
        <ContentBox>
          <HeroSection>
            <Title>Welcome to My Portfolio</Title>
            <Subtitle>
              I'm a passionate developer focused on creating meaningful digital experiences.
              Explore my work and get in touch to discuss potential collaborations.
            </Subtitle>
          </HeroSection>
        </ContentBox>
      </MainContent>
    </HomeContainer>
  );
};

export default Home; 
import React from 'react';
import styled from 'styled-components';
import {
  PageContainer,
  InnerPageContainer,
} from '../../components/pageContainer';
import TopSection from './TopSection';
import Navbar from '../../components/navbar';
import { deviceSize } from '../../components/responsive';
import Marginer from '../../components/marginer';
import SpecialistAd from '../../components/specialistAd';
import Services from './Services';
import Footer from '../../components/footer';

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
`;

function HomePage() {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
          <Services />
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
        <SpecialistAd />
        <Marginer direction="vertical" margin="5em" />
        <Footer />
      </InnerPageContainer>
    </PageContainer>
  );
}

export default HomePage;

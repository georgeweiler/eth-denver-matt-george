import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import HeroImg from '../../static/images/Video---Hero---The-Try-Guys.webp';
import Hero from '../../components/Hero';

const MaxWidthDiv = styled.div`
  max-width: 300px;
`;

const DashboardHero = () => {
  return (
    <Hero imgSrc={HeroImg} large>
      <MaxWidthDiv>
        <h1>Some Promoted Content Creator</h1>
        <p>
          This is a jumbotron to highlight a content creator. It is big and
          beautiful and includes a button that links to the creator page.
        </p>
        <Button>Subscribe</Button>
      </MaxWidthDiv>
    </Hero>
  );
};

export default DashboardHero;

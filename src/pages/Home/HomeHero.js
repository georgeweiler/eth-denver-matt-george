import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Hero from '../../components/Hero';
import HomeHeroImg from '../../static/images/Home-Hero-Image.png';

const HeroContents = styled.div`
  padding: 100px 0 0 140px;
  width: 600px;
`;
const HomeHero = () => (
  <>
    <Hero imgSrc={HomeHeroImg} large>
      <HeroContents>
        <h1 className="mb-4">
          Like creative content?
          <br />
          We&apos;ve got you covered.
        </h1>
        <p className="mb-4">
          Subscribe to your favorite entertainers, and receive exclusive content
          & tokens.
        </p>
        <Button as={Link} to="/dashboard" variant="primary">
          Sign Up
        </Button>
      </HeroContents>
    </Hero>
  </>
);

export default HomeHero;

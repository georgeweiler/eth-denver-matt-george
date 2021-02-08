import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';

const Jumbo = styled(Jumbotron)`
  background-image: ${p => `url(${p.$imgSrc})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: ${p => (p.$large ? '700px' : '420px')};
`;

const Hero = ({ children, imgSrc, large = false, fluid = false }) => (
  <Jumbo $imgSrc={imgSrc} $large={large} fluid={fluid}>
    {children}
  </Jumbo>
);

export default Hero;

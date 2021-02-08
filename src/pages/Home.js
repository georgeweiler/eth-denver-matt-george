import React from 'react';
import styled from 'styled-components';
import { Image, Button, Accordion, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import HomeHero from '../images/Home-Hero-Image.png';
import MetaMask from '../images/Home-MetaMask.png';
import MetaMaskConnect from '../images/Home-MetaMask-Connect.png';

const Hero = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${HomeHero});
  background-repeat: no-repeat;
  background-size: cover;
`;
const HeroContents = styled.div`
  padding: 100px 0 0 140px;
  width: 600px;
`;
const HomeDivider = styled.div`
  width: 100%;
  height: 10px;
  background-color: #333;
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 50px 80px;
`;
const SectionText = styled.div`
  width: 26vw;
`;
const Home = () => (
  <>
    <Navbar signedIn={false} />
    <Hero>
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
        <Button variant="primary">Sign Up</Button>
      </HeroContents>
    </Hero>
    <HomeDivider />
    <Section>
      <Image src={MetaMask} fluid />
      <SectionText>
        <h3 className="mb-4">
          Join us as we disintermediate the entertainment industry.
        </h3>
        <p className="mt-2">
          We use Ethereum and MetaMask to directly connect fans with their
          favorite creators. No more middlemen taking a cut, and all content is
          completely owned by the creators.
        </p>
      </SectionText>
    </Section>
    <HomeDivider />
    <Section>
      <SectionText>
        <h3 className="mb-4">
          Using Ethereum can seem daunting. We make it easy.
        </h3>
        <p>If you’re new to Ethereum, no problem:</p>
        <ol>
          <li>Read more about MetaMask here</li>
          <li>When you’re ready, download MetaMask here</li>
          <li>Create a MetaMask wallet using this guide</li>
          <li>Purchase your first ETH using this guide</li>
          <li>
            CONGRATULATIONS!! 🎉 You&apos;re taking part in the decentralized
            movement. Pat yourself on the back 😃
          </li>
          <li>Create an account on EthTube here</li>
          <li>
            Browse artists & subscribe by connecting your account shown to the
            right.
          </li>
        </ol>
      </SectionText>
      <Image src={MetaMaskConnect} width="250px" fluid />
    </Section>
    <HomeDivider />
    <Section>
      <SectionText>
        <h3 className="mb-4">Frequently Asked Questions</h3>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </SectionText>
    </Section>
  </>
);

export default Home;

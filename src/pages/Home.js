import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image, Button, Accordion, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeHero from '../images/Home-Hero-Image.png';
import MetaMask from '../images/Home-MetaMask.png';
import MetaMaskConnect from '../images/Home-MetaMask-Connect.png';

// const Hero = styled.div`
//   width: 100%;
//   height: 420px;
//   background-image: url(${HomeHero});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;
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
    <Hero imgSrc={HomeHero} large>
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
          <li>
            Read more about MetaMask <a href="https://metamask.io/">here</a>
          </li>
          <li>
            When you’re ready, download MetaMask{' '}
            <a href="https://metamask.io/">here</a>
          </li>
          <li>
            Create a MetaMask wallet using{' '}
            <a href="https://medium.com/publicaio/a-complete-guide-to-using-metamask-updated-version-cd0d6f8c338f">
              this guide
            </a>
          </li>
          <li>
            Purchase your first ETH using{' '}
            <a href="https://medium.com/@mark.lasia/how-to-buy-eth-metamask-bc52076a67ff">
              this guide
            </a>
          </li>
          <li>
            CONGRATULATIONS!! 🎉 You&apos;re taking part in the decentralized
            movement. Pat yourself on the back 😃
          </li>
          <li>
            Create your EthTube account <Link to="/dashboard">here</Link>
          </li>
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
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="text-left"
              >
                Oh god. Why can&apos;t I just use YouTube? Or Twitch? Or
                Netflix? Or OnlyFans - I mean, wait, what?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                I mean, you still <i>can</i>, but you&apos;re not doing the
                content creators any favors. EthTube is all about eliminating
                any and all middlemen. With EthTube, blockchain technology
                connects you directly to your favorite artists.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                className="text-left"
              >
                Are middlemen really <i>that</i> big of a deal?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Short answer: Yes. Longer answer: still distills down to yes.
                Ultimately, we&apos;re not opposed if you <i>choose</i> to
                involve third parties in a transaction because you consciously
                desire the services they provide. However, we built this site as
                an alternative for individuals who don&apos;t want or need the
                ancillary benefits that banks provide.
                <br />
                <br />
                After all, isn&apos;t there something beautiful having a
                transaction between just 2 people?
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="2"
                className="text-left"
              >
                Why do I have to pay? Other sites are free.
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Right now, we don&apos;t monetize using ads. If that&apos;s
                something our users want (we&apos;re open to suggestions!) then
                we&apos;d be happy to implement that. Ultimately though, we love
                our content creators, and they need to make a living somehow.
                We&apos;ve made sure everything here is very reasonably priced
                though and hope you find that every subscription is worth every{' '}
                <del>cent</del> dai!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </SectionText>
    </Section>
  </>
);

export default Home;

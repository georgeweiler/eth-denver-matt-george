import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import imgA from '../../static/images/Music---Thumbnail---RAC.jpg';
import imgB from '../../static/images/Podcast---Thumbnail---Jake-and-Amir.webp';
import imgC from '../../static/images/Tutorial---Thumbnail---Data-School.webp';

const subscriptions = [
  {
    imgSrc: imgA,
    description:
      'Litecoin generates the provably fair dapp after many decentralised application!',
    title: 'Some Dude',
  },
  {
    imgSrc: imgB,
    description:
      'Since NFT broadcast lots of immutable multi signature during many proof of work.',
    title: 'A different dude',
  },
  {
    imgSrc: imgC,
    description:
      'Since SHA 256 stuck lots of minimum ERC721 token standard, ether was few burned',
    title: 'Duuude',
  },
];

const FlexContainer = styled.div`
  display: flex;
`;

const SubscribedContent = () => {
  return (
    <div>
      <h2>Your Subscriptions:</h2>
      <FlexContainer>
        {subscriptions.map(({ imgSrc, description, title }) => {
          return (
            <Card style={{ width: '18rem', margin: '0 1rem' }} key={title}>
              <Card.Img variant="top" src={imgSrc} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Button variant="primary">View Content</Button>
              </Card.Body>
            </Card>
          );
        })}
      </FlexContainer>
    </div>
  );
};

export default SubscribedContent;

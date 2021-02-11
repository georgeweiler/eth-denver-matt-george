import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { SuperFluidContext } from '../../SFContext';
import { Link } from 'react-router-dom';

const FlexContainer = styled.div`
  display: flex;
`;

const SubscribedContent = () => {
  const superFluid = useContext(SuperFluidContext);

  return (
    <div>
      <h2>Your Subscriptions:</h2>
      <FlexContainer>
        {superFluid.subscriptions.map(
          ({ thumbnailSrc, description, title, slug }) => {
            return (
              <Card style={{ width: '18rem', margin: '0 1rem' }} key={title}>
                <Card.Img variant="top" src={thumbnailSrc} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Link to={`/creator/${slug}`} key={slug}>
                    <Button variant="primary">View Content</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          },
        )}
      </FlexContainer>
    </div>
  );
};

export default SubscribedContent;

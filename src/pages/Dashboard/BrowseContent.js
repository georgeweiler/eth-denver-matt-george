import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { contentCreators } from '../../static/data/contentCreators';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HoverText = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;

  .fadedbox {
    padding: 1rem;
    background-color: #666666;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    -webkit-transition: all 300ms ease-out;
    -moz-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
    -ms-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
    opacity: 0;
    height: 286px;
    width: 286px;
  }
  :hover .fadedbox {
    opacity: 0.8;
  }
  .text {
    -webkit-transition: all 300ms ease-out;
    -moz-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
    -ms-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
    transform: translateY(30px);
    -webkit-transform: translateY(30px);
  }
  .title {
    opacity: 0;
    transition-delay: 0.2s;
    transition-duration: 0.3s;
  }
  :hover .title,
  :focus .title {
    opacity: 1;
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
`;

const BrowseableContent = () => {
  return (
    <div>
      <h2>Browse for new creators</h2>
      <FlexContainer>
        {contentCreators.map(creator => {
          return (
            <Link to={`/creator/${creator.slug}`} key={creator.slug}>
              <Card style={{ width: '18rem', margin: '1rem' }}>
                <HoverText>
                  <Card.Img
                    variant="top"
                    src={creator.thumbnailSrc}
                    style={{ width: 286, height: 286 }}
                  />
                  <div className="fadedbox">
                    <div className="title text">{creator.description}</div>
                  </div>
                </HoverText>
                <Card.Body>
                  <Card.Title>{creator.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </FlexContainer>
    </div>
  );
};

export default BrowseableContent;

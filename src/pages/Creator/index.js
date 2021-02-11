import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Check } from 'react-bootstrap-icons';
import { contentCreators } from '../../static/data/contentCreators';
import Hero from '../../components/Hero';
import { SuperFluidContext } from '../../SFContext';

const HeroContainer = styled.div`
  margin-bottom: 150px;
  position: relative;
  .profile-img {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 310px;
    border-radius: 50%;
    border: 3px solid black;
  }
`;

const CreatorInfo = styled(Container)`
  padding: 2rem 6rem;
  background-color: ${(p) => p.theme.gray700};
  border-radius: 4px;
  .creator-title {
    text-align: center;
  }
  .creator-desc {
    text-align: center;
  }
`;

const SubscriptionBoxes = styled(Container)`
  display: flex;
  justify-content: space-between;
  .subscription-box {
    border-radius: 4px;
    background-color: ${(p) => p.theme.gray700};
    padding: 2rem;
    width: 300px;
    min-height: 500px;
    margin: 1rem;
  }
  .title {
    text-align: center;
  }
  .price {
    text-align: center;
  }
  .subscribe-btn {
    margin: auto;
    display: block;
  }
  .benefits-container {
    margin-top: 2rem;
    .benefit {
      margin-top: 1rem;
    }
  }
`;

const CreatorPage = ({ heroSrc, thumbnailSrc, title, description }) => {
  const superFluid = useContext(SuperFluidContext);

  const subscriptionOptions = [
    {
      tier: 'Follower',
      price: 5,
      benefits: ['All Public Content', 'Exclusive Content'],
    },
    {
      tier: 'Fan',
      price: 10,
      benefits: [
        'Follower Benefits',
        'NFT token awarded after 3 consecutive months',
        'Access to fans-only Discord channel',
      ],
    },
    {
      tier: 'Super Fan',
      price: 15,
      benefits: [
        'Fan Benefits',
        'Direct Communications',
        'Voting rights on content backlog and prioritization',
      ],
    },
  ];

  return (
    <div>
      <HeroContainer>
        <Hero imgSrc={heroSrc} />
        <img className="profile-img" src={thumbnailSrc} alt="Profile" />
      </HeroContainer>
      <CreatorInfo>
        <h2 className="creator-title">{title}</h2>
        <p className="creator-desc">{description}</p>
      </CreatorInfo>
      <SubscriptionBoxes>
        {subscriptionOptions.map((opt) => (
          <div className="subscription-box" key={opt.tier}>
            <h3 className="title">{opt.tier}</h3>
            <h2 className="price">{opt.price} per/month</h2>
            <Button
              variant="warning"
              className="subscribe-btn"
              onClick={() => {
                try {
                  superFluid.createFlow(opt.price);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Subscribe
            </Button>
            <div className="benefits-container">
              {opt.benefits.map((benefit) => (
                <div key={benefit} className="benefit">
                  <Check color="white" /> {benefit}
                </div>
              ))}
            </div>
          </div>
        ))}
      </SubscriptionBoxes>
    </div>
  );
};

const CreatorRouter = () => (
  <Route
    path={`/creator/:creatorSlug`}
    render={({
      match: {
        params: { creatorSlug },
      },
    }) => {
      const creator = contentCreators.find(({ slug }) => slug === creatorSlug);
      return <CreatorPage {...creator} />;
    }}
  />
);

export default CreatorRouter;

import React from 'react';
import { Route } from 'react-router-dom';
import { contentCreators } from '../../static/data/contentCreators';
import Hero from '../../components/Hero';

const CreatorPage = ({ heroSrc, title }) => {
  return (
    <div>
      <Hero imgSrc={heroSrc} />
      creator page for: {title}{' '}
    </div>
  );
};

const CreatorRouter = () => {
  return (
    <Route
      path={`/creator/:creatorSlug`}
      render={({
        match: {
          params: { creatorSlug },
        },
      }) => {
        const creator = contentCreators.find(
          ({ slug }) => slug === creatorSlug,
        );
        return <CreatorPage {...creator} />;
      }}
    />
  );
};

export default CreatorRouter;

import React from 'react';
import DashboardHero from './DashboardHero';
import SubscribedContent from './SubscribedContent';
import BrowseContent from './BrowseContent';

const Dashboard = () => {
  return (
    <div>
      <DashboardHero />
      <SubscribedContent />
      <BrowseContent />
    </div>
  );
};

export default Dashboard;

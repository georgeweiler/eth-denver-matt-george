import React, { useContext } from 'react';
import DashboardHero from './DashboardHero';
import SubscribedContent from './SubscribedContent';
import BrowseContent from './BrowseContent';
import { SuperFluidContext } from '../../SFContext';

const Dashboard = () => {
  const superFluid = useContext(SuperFluidContext);
  React.useEffect(() => {
    superFluid.getUser();
  }, []);

  return (
    <div>
      <DashboardHero />
      <SubscribedContent />
      <BrowseContent />
    </div>
  );
};

export default Dashboard;

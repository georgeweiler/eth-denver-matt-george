import React, { useEffect } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import Route from './components/Route';
import routes from './routes';
import { getSFUser } from './utils/SuperFluid';
import { SuperFluidProvider } from './SFContext';
import 'react-notifications/lib/notifications.css';

// I hope this works!
const App = () => {
  useEffect(() => {
    async function init() {
      if (
        typeof window.ethereum === 'undefined' ||
        !window.ethereum.isMetaMask
      ) {
        return showErrorMessage('Please install MetaMask to use this dApp');
      }
      const provider = window.ethereum;
      if (provider.networkVersion !== '5') {
        return showErrorMessage(
          'Please change the network in metamask to the Goerli Testnet',
        );
      }
      await provider.enable();
      return undefined;
    }
    init();
  }, []);

  const showErrorMessage = (message) => {
    NotificationManager.error(message, 'Error', 20000);
  };

  const sfUser = React.useMemo(() => getSFUser(), []);
  return (
    <SuperFluidProvider>
      <NotificationContainer />
      <Switch>
        {routes.map((route) => (
          <Route
            {...route}
            render={() => {
              const Component = route.component;
              return <Component sfUser={sfUser} />;
            }}
            key={route.path}
          />
        ))}
      </Switch>
    </SuperFluidProvider>
  );
};

export default withRouter(App);

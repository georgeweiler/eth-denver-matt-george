import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import Route from './components/Route';
import routes from './routes';
import { getSFUser } from './utils/SuperFluid';
import { SuperFluidProvider } from './SFContext';

const App = () => {
  const sfUser = React.useMemo(() => getSFUser(), []);
  return (
    <SuperFluidProvider>
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

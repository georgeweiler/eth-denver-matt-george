import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import Route from './components/Route';
import routes from './routes';

const App = () => (
  <div>
    <Switch>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Switch>
  </div>
);

export default withRouter(App);

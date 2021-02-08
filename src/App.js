import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Route from './components/Route';
import routes from './routes';

const App = () => (
  <Container>
    <Switch>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Switch>
  </Container>
);

export default withRouter(App);

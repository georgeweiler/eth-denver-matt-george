import React from 'react';
import { Switch, withRouter, Link } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import Route from './components/Route';
import Home from './pages/Home';

const Dashboard = () => (
  <Alert variant="success">
    You made it to the dashboard!{' '}
    <Alert.Link>
      <Link to="/">Go back</Link>
    </Alert.Link>
  </Alert>
);
const NotFound = () => <div>404 not found</div>;

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    publicRoute: true,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    publicRoute: true,
  },
  {
    path: '*',
    component: NotFound,
    publicRoute: true,
  },
];

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

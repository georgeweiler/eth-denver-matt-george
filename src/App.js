import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import Route from './components/Route';
import { Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const routes = [
  {
    path: '/',
    component: () => (
      <>
        <div className="test-class">hello world</div>
        <Link to="/dashboard">Go to dashboard</Link>
      </>
    ),
    exact: true,
    publicRoute: true,
  },
  {
    path: '/dashboard',
    component: () => (
      <Alert variant="success">
        You made it to the dashboard!{' '}
        <Alert.Link>
          <Link to="/">Go back</Link>
        </Alert.Link>
      </Alert>
    ),
    exact: true,
    publicRoute: true,
  },
  {
    path: '*',
    component: () => <div>404 not found</div>,
    publicRoute: true,
  },
];

const App = props => {
  return (
    <Container>
      <Switch>
        {routes.map(route => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </Container>
  );
};

export default withRouter(App);

import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <Alert variant="success">
    You made it to the dashboard!{' '}
    <Alert.Link>
      <Link to="/">Go back</Link>
    </Alert.Link>
  </Alert>
);

export default Dashboard;

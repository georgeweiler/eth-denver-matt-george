import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div className="test-class">hello world</div>
    <Link to="/dashboard">Go to dashboard</Link>
  </>
);

export default Home;

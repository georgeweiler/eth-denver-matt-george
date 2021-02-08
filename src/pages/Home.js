import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = ({ theme }) => (
  <>
    <div className="test-class">hello world</div>
    <Link to="/dashboard">Go to dashboard</Link>
  </>
)

export default Home;

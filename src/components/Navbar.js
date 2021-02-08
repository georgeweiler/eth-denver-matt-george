import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import Title from '../static/images/icon.png';

const Nav = ({ signedIn }) => (
  <Navbar bg="black" expand="lg">
    <Navbar.Brand as={Link} to="/" className="mr-auto">
      <img src={Title} width="75" height="25" alt="Logo" />
    </Navbar.Brand>
    <Navbar.Brand>
      <Button as={Link} to="/dashboard" className="mr-sm-2" variant="light">
        Log In
      </Button>
    </Navbar.Brand>
  </Navbar>
);

Nav.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default Nav;

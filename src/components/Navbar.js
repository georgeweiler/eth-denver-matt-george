import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Button } from 'react-bootstrap';
import Title from '../images/icon.png';

const Nav = ({ signedIn }) => (
  <Navbar bg="black" expand="lg">
    <Navbar.Brand href="/" className="mr-auto">
      <img src={Title} width="75" height="25" alt="Logo" />
    </Navbar.Brand>
    <Navbar.Brand>
      <Button className="mr-sm-2" variant="light">
        Log In
      </Button>
    </Navbar.Brand>
  </Navbar>
);

Nav.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default Nav;

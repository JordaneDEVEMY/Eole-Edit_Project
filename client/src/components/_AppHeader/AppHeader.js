import React, { useState } from "react";
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AppHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        [Technical Test] Eole-Edit Project
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
};

AppHeader.propTypes = {
};

AppHeader.defaultProps = {
};

export default React.memo(AppHeader);

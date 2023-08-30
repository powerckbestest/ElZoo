import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';

export default function AppNavBar({ user }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Nav className="me-auto flex-grow-1">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/tariffs">Tariff</Nav.Link>
          <Nav.Link href="/animals">Animals</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Mammals</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Birds</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fish</NavDropdown.Item>
          </NavDropdown>
          {user && <Nav.Link href="/create">Create</Nav.Link>} {/* Show "Create" link only for authenticated users */}
        </Nav>
        <Nav className="me-auto flex-grow-0">
          {user ? (
            <Nav.Link
              href="/logout"
              onClick={(e) => {
                e.preventDefault();
                axios('/api/logout')
                  .then(() => (window.location.href = '/login'))
                  .catch(console.log);
              }}
            >
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

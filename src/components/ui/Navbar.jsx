import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';


export default function AppNavBar({user}) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Hello, {user ? user.name : 'guest'}</Navbar.Brand>
        <Nav className="me-auto flex-grow-1">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search" />
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
            <Nav.Link href="/login">Sign in</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

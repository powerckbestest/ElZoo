import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';

export default function AppNavBar({ user }) {
  return (
    <Navbar className='navBar' style={{ width: '100%', margin: 0 }}>

      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Nav className="me-auto flex-grow-1" >
          <Nav.Link className='navigation' href="/">Главная</Nav.Link>
          <Nav.Link className='navigation' href="/tariffs">Тарифы</Nav.Link>
          <Nav.Link className='navigation' href="/animals">Животные</Nav.Link>
          <NavDropdown title="Категории" id="basic-nav-dropdown">
            <NavDropdown.Item className='category' href="#action/3.1">Млекопитающие</NavDropdown.Item>
            <NavDropdown.Item className='category' href="#action/3.2">Птицы</NavDropdown.Item>
            <NavDropdown.Item className='category' href="#action/3.3">Рыбы</NavDropdown.Item>
          </NavDropdown>
          {user && <Nav.Link href="/create">Создание карточки</Nav.Link>}
          {user &&  <Nav.Link href="/update-tariffs">Изменение тарифов</Nav.Link> } 
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
            > Выход
              
            </Nav.Link>
          ) : (
            <Nav.Link href="/login" className='navigationLog'>Авторизация</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/Navbar';
import HomePage from './pages/HomePage';
import CreateAnimal from './pages/CreateAnimal'
import Login from './pages/Login'
import Tariffs from './pages/Tariffs'
import Animals from './pages/Animals';

export default function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateAnimal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tariffs" element={<Tariffs />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </Container>
  )
}

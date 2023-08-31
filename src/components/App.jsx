import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/Navbar';
import HomePage from './pages/HomePage';
import CreateAnimal from './pages/CreateAnimal'
import Login from './pages/Login'
import Tariffs from './pages/Tariffs'
import Animals from './pages/Animals';
import SingleAnimal from './pages/SingleAnimal';
import TarrifsEdit from './pages/TariffsEdit'

export default function App({ animals, user, animal, animalPics }) {
  return (

    <>   <NavBar user={user} />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateAnimal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tariffs" element={<Tariffs user={user} />} />
          <Route path="/update-tariffs" element={<TarrifsEdit user={user} />} />
        <Route path="/animals" element={<Animals user={user} animals={animals} />} />
          <Route path="/animals/:id" element={<SingleAnimal animal={animal} animalPics={animalPics}/>} />
      </Routes>
      </Container>
    </>
  )
}

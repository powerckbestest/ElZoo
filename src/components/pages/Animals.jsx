import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import AnimalCard from './AnimalCard';

export default function Animals({ animals }) {
  const [animal, setAnimal] = useState(animals);  
  cangeHandler = (e) => setAnimal((prev) => [...prev, e]);
  
  return (
    <Row className="justify-content-md-center">
      {
        animal?.map((animal) => (
          <AnimalCard key={animal.id} onChange={cangeHandler} />
        ))
      }
    </Row>
  )
}

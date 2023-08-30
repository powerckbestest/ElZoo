import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import AnimalCard from './AnimalCard';

export default function Animals({ animals }) {
  const [animal, setAnimal] = useState(animals);  
  const changeHandler = (e) => setAnimal((prev) => [...prev, e]);
  
  return (
    <Row className="justify-content-md-center">
      {
        animal?.map((el) => (
          <AnimalCard key={el.id} changeHandler={changeHandler} />
        ))
      }
    </Row>
  )
}

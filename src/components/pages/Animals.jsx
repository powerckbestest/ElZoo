import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import AnimalCard from './AnimalCard';

export default function Animals({user,  animals }) {
  const [animalList, setAnimalList] = useState(animals);

  const editHandler = async (id, updateData) => {
    await axios.patch(`/api/animals/${id}`, updateData);
    const updateAnimalList = animalList.map(animal => animal.id === id ? {...animal, ...updateData}: animal)
    setAnimalList(updateAnimalList)
  }

  const deleteHandler = async (id) => {
      await axios.delete(`/api/animals/${id}`);
      const updatedAnimalList = animalList.filter(animal => animal.id !== id);
      setAnimalList(updatedAnimalList);
  }
  return (
    <Row className="justify-content-md-center">
      {
        animalList?.map((el) => (
          <AnimalCard setAnimalList={setAnimalList} user={user} key={el.id} el={el} onDelete={user? deleteHandler: null} onEdit={user?editHandler:null} />
        ))
      }
    </Row>
  )
}

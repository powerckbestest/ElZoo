import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import SearchIcon from '../ui/SearchIcon';
import AnimalCard from './AnimalCard';

export default function Animals({ user, animals }) {
  const [animalList, setAnimalList] = useState(animals);
  const [searchedText, setSearchedText] = useState('');
  const [searchedPosts, setSearchedPosts] = useState([]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchedText(searchText);

    if (searchText.length > 0) {
      const filteredAnimals = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchedPosts(filteredAnimals);
    } else {
      setSearchedPosts([]);
    }
  };

  const editHandler = async (id, updateData) => {
    await axios.patch(`/api/animals/${id}`, updateData);
    const updateAnimalList = animalList.map((animal) =>
      animal.id === id ? { ...animal, ...updateData } : animal
    );
    setAnimalList(updateAnimalList);
  };

  const deleteHandler = async (id) => {
    await axios.delete(`/api/animals/${id}`);
    const updatedAnimalList = animalList.filter((animal) => animal.id !== id);
    setAnimalList(updatedAnimalList);
  };

  return (
    <Row className="justify-content-md-center">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <SearchIcon />
        </InputGroup.Text>
        <Form.Control
          value={searchedText}
          onChange={handleSearch}
          type="text"
          name="search"
          aria-describedby="basic-addon1"
          placeholder="Search"
          aria-label="Search"
        />
      </InputGroup>
      <Row className="mt-4">
        {searchedText.length > 0
          ? searchedPosts.map((animal) => (
              <AnimalCard 
              user={null} 
              el={animal} 
              key={animal.id} 
              onDelete={user ? deleteHandler : null}
              onEdit={user ? editHandler : null} />
            ))
          : animalList.map((el) => (
              <AnimalCard
                setAnimalList={setAnimalList}
                user={user}
                key={el.id}
                el={el}
                onDelete={user ? deleteHandler : null}
                onEdit={user ? editHandler : null}
              />
            ))}
      </Row>
    </Row>
  );
}

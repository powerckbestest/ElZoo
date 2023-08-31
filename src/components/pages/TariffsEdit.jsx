import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Table } from 'react-bootstrap'

export default function Tariffs() {
  const [tarrifs, setTariffs] = useState([]);
  const [editTarrifs, setEdit] = useState([]);

  useEffect(() => {
    async function getTarrifs() {
      const response = await axios.get('/api/tariffs');
      setTariffs(response.data);
      setEdit([...response.data]);
    }
    getTarrifs();
  }, []);

  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    setEdit((prevTariffs) => {
      const updatedTariffs = [...prevTariffs];
      updatedTariffs[index][field] = value;
      return updatedTariffs;
    });
  };

  const handleSave = async () => {
    try {
      await axios.post('/api/update-tariffs', editTarrifs);
      console.log('Tariffs updated successfully');
    } catch (error) {
      console.error('Error updating tariffs:', error);
    }
  };

  const mapPeopleIdToCategory = (peopleId) => {
    return peopleId === 1 ? 'Взрослые' : 'Дети';
  };

  const mapDayIdToDay = (dayId) => {
    return dayId === 1 ? 'Выходные' : 'Будни';
  };

  return (
    <div>
      <h2>Edit Tariffs</h2>
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Day</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {editTarrifs.map((tarif, index) => (
            <tr key={index}>
              <td>{mapPeopleIdToCategory(tarif.peopleId)}</td>
              <td>{mapDayIdToDay(tarif.dayId)}</td>
              <td>
                <Form.Control
                  type="text"
                  value={tarif.price}
                  onChange={(event) => handleInputChange(event, index, 'price')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
}

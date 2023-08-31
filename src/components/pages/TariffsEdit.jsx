import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function Tariffs() {
  const [tariffs, setTariffs] = useState([]);
  const [editTariffs, setEditTariffs] = useState([]);

  useEffect(() => {
    async function getTariffs() {
      const response = await axios.get('/api/tariffs');
      setTariffs(response.data);
      setEditTariffs(JSON.parse(JSON.stringify(response.data)));
    }
    getTariffs();
  }, []);

  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    setEditTariffs((prevTariffs) => {
      const updatedTariffs = [...prevTariffs];
      updatedTariffs[index][field] = value;
      return updatedTariffs;
    });
  };

  const handleSave = async () => {
    try {
      await axios.post('/api/update-tariffs', editTariffs);
      console.log('Tariffs updated successfully');
    } catch (error) {
      console.error('Error updating tariffs:', error);
    }
  };

  const mapPeopleIdToCategory = (peopleId) => (peopleId === 1 ? 'Взрослые' : 'Дети');

  const mapDayIdToDay = (dayId) => (dayId === 1 ? 'Выходные' : 'Будни');

  return (
    <div>
      <h2>Изменение тарифов</h2>
      <Table>
        <thead>
          <tr>
            <th>Категории животных</th>
            <th>День недели</th>
            <th>Цена билета</th>
          </tr>
        </thead>
        <tbody>
          {tariffs.map((tarif, index) => (
            <tr key={`${tarif.peopleId}-${tarif.dayId}`}>
              <td>{mapPeopleIdToCategory(tarif.peopleId)}</td>
              <td>{mapDayIdToDay(tarif.dayId)}</td>
              <td>
                <Form.Control
                  type="text"
                  value={editTariffs[index].price}
                  onChange={(event) => handleInputChange(event, index, 'price')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleSave}>Сохранить</Button>
    </div>
  );
}

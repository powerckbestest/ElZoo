import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

export default function Tariffs() {
    const [tariffs, setTariffs] = useState([])

    useEffect(() => {
        async function getTariffs () {
            const response = await axios.get('/api/tariffs')
            setTariffs(response.data)
        }
        getTariffs()
    }, [])

    const mapPeopleIdToCategory = (peopleId) => peopleId === 1 ? 'Взрослые' : 'Дети';
  
    const mapDayIdToDay = (dayId) => dayId === 1 ? 'Выходные' : 'Будни';
  return (
    <div>
      <h2>Tарифы</h2>
      <Table>
        <thead>
          <tr>
            <th>Категории животных</th>
            <th>День недели</th>
            <th>Цена билета</th>
          </tr>
        </thead>
        <tbody>
          {tariffs.map((tarif) => (
            <tr key={tarif.id}>
              <td>{mapPeopleIdToCategory(tarif.peopleId)}</td>
              <td>{mapDayIdToDay(tarif.dayId)}</td>
              <td>{`${tarif.price}₽`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

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
  return (
    <div>
      <h2>Tariffs</h2>
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Day</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tariffs.map((tarif) => (
            <tr key={tarif.id}>
              <td>{tarif.peopleId}</td>
              <td>{tarif.dayId}</td>
              <td>{tarif.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

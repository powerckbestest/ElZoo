import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function AnimalCard({ el }) {


  const editHandlet = () => {

  }

  const deleteHandler = () => {
    axios.delete(`/api/animals/${el.id}`)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.nick}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.name}</Card.Subtitle>
        <Card.Text>
          {el.desc}
        </Card.Text>
        <Card.Link href="#">Изменить</Card.Link>
        <Card.Link onClick={deleteHandler}>Удалить</Card.Link>
      </Card.Body>
    </Card>
  )
}

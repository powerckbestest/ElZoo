import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function AnimalCard({ el }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.nick}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.name}</Card.Subtitle>
        <Card.Text>
          {el.desc}
        </Card.Text>
        <Card.Link href="#">Изменить</Card.Link>
        <Card.Link href="#">Удалить</Card.Link>
      </Card.Body>
    </Card>
  )
}

import React from 'react';
import Card from 'react-bootstrap/Card';

export default function AnimalCard({ el, onDelete, onEdit, user }) {

  const deleteHandler = () => {
    onDelete(el.id);
  }

  const editHandler = () => {
    const updateData = { name: 'New name', nick: 'new nick', desc: 'new desk' };
    onEdit(el.id, updateData);
    console.log(updateData)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.nick}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.name}</Card.Subtitle>
        <Card.Text>
          {el.desc}
        </Card.Text>
        {user ? (
          <>
            <Card.Link onClick={editHandler}>Изменить</Card.Link>
            <Card.Link onClick={deleteHandler}>Удалить</Card.Link>
          </>
        ): false}
      </Card.Body>
    </Card>
  );
}

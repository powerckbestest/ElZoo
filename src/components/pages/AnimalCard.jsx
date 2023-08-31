import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalPage from './ModalPage';

export default function AnimalCard({ el, onDelete, user, setAnimalList }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = () => {
    onDelete(el.id);
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
            <Card.Link onClick={handleShow}>Изменить</Card.Link>
            <Card.Link onClick={deleteHandler}>Удалить</Card.Link>
          </>
        ) : false}
        <Button onClick={() => window.location.href = `/animals/${el.id}`} variant="success">Подробнее...</Button>{' '}
      </Card.Body>
      {show ?
        <ModalPage setAnimalList={setAnimalList} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} el={el} /> :
        <></>
      }
    </Card>
  );
}

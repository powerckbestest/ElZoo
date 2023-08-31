import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function CreateAnimal() {
  const sendChanges = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", e.target.name.value)
    formData.append("nick", e.target.nick.value)
    formData.append("desc", e.target.desc.value)
    for (const file of e.target.files.files) {
      formData.append("files", file);
    }
    e.target.reset()
    const res = await axios.post('/api/create', formData)
    if (res.status === 200) {
      alert('успешно!')
    }
  }

  return (
    <Form onSubmit={sendChanges}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Название животного:</Form.Label>
        <Form.Control name='name' type="text" placeholder="Печатать сюда" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Кличка:</Form.Label>
        <Form.Control name='nick' type="text" placeholder="Печатать сюда" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Описание животного:</Form.Label>
        <Form.Control name='desc' as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFileMultiple">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file" multiple name="files" placeholder="img" />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />{' '}

      
    </Form>
    
  )
}

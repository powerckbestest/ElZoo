import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function CreateAnimal() {
  const [input, setInput] = useState({
    name: '',
    nick: '',
    desc: ''
  })

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const sendChanges = async (e) => {
    e.preventDefault()
    const res = await axios.post('/api/create', input)
    if (res.status === 200) {
      alert('успешно!')
    }
  }

  return (
    <Form onSubmit={sendChanges}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Название животного:</Form.Label>
        <Form.Control value={input.name} onChange={changeHandler} name='name' type="text" placeholder="Печатать сюда" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Кличка:</Form.Label>
        <Form.Control value={input.nick} onChange={changeHandler} name='nick' type="text" placeholder="Печатать сюда" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Описание животного:</Form.Label>
        <Form.Control value={input.desc} onChange={changeHandler} name='desc' as="textarea" rows={3} />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />{' '}
    </Form>
  )
}

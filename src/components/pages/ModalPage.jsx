import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function ModalPage({ show, handleClose, el, setAnimalList }) {
    const [pics, setPics] = useState([])

    const [input, setInput] = useState({
        newname: el.name,
        newnick: el.nick,
        newdesc: el.desc
    })

    useEffect(() => {
        axios.post(`/api/animals/${el.id}`).then((data) => {
            setPics(data.data.animalPics)
        })
    }, [])

    const doneHandler = () => {
        // setDone((prev) => !prev)
        // axios.patch(`/api/update/${post.id}`)
    }
    const deleteHandler = (e) => {
        // axios.delete(`/api/delete/${post.id}`)
        // setUpdateThing((prev) => prev.filter((el) => el.id !== post.id))
    }
    const sendChanges = async (e) => {
        e.preventDefault()
        const response = await axios.patch(`/api/updateanimal/${el.id}`, input)
        setAnimalList((prev) => prev.map((element) => element.id !== response.data.id ? el : response.data))
        handleClose()
    }
    const changeHandler = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование карточки животного</Modal.Title>
            </Modal.Header>
            <Form onSubmit={sendChanges}>
                <Modal.Body>
                    <Form.Control onChange={changeHandler} value={input.newname} name='newname' size="lg" type="text" placeholder="Type there" />
                </Modal.Body>
                <Modal.Body>
                    <Form.Control onChange={changeHandler} value={input.newnick} name='newnick' size="lg" type="text" placeholder="Type there" />
                </Modal.Body>
                <Modal.Body>
                    <Form.Control onChange={changeHandler} value={input.newdesc} name='newdesc' size="lg" type="text" placeholder="Type there" />
                </Modal.Body>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formFileMultiple">
                        <Form.Label>Picture</Form.Label>
                        <Form.Control type="file" multiple name="files" placeholder="img" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Body>
                    {pics.map((elem) => (
                        <Card style={{ width: '30rem' }} key={elem.id}>
                            <img src={`/img/${elem.img}`} alt="pic" />
                            <Card.Body>
                                <Button onClick={(e) => {
                                    e.preventDefault();
                                    deleteHandler();
                                    axios.delete(`/api/deletePic/${elem.id}`)
                                    setPics((prev) => prev.filter((im) => im.id !== elem.id))
                                }} variant="danger">Удалить</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

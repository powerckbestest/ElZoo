import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Tariffs({user}) {
  return (
    
    <>
    {user ?
    <div>Weekend price:</div>
    <div>Old</div>
    <Form.Control type="text" placeholder="Normal text" />
    <br />
    <div>Child</div>
    <Form.Control type="text" placeholder="Normal text" />
    <br />
    <div>WeekDay price:</div>
    <div>Old</div>
    <Form.Control type="text" placeholder="Normal text" />
    <br />
    <div>Child</div>
    <Form.Control type="text" placeholder="Normal text" />
    :
    
    }
  </>
  )
}

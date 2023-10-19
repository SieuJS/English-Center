import * as React from 'react';
import Form from 'react-bootstrap/Form';

import './auth.css'

export default function InputWithIcon() {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text>
        
      </Form.Text>
      <Form.Text id="passwordHelpBlock" className='input-text' muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
    </>
  );
}
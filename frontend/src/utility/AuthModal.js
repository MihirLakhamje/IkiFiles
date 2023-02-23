import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import googleicon from '../assets/google-icon.svg'

export default function AuthModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Welcome to IkiFiles
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex align-items-center flex-column gap-3'>
                <Button variant='light' className='shadow rounded-3 w-75'><img src={googleicon} alt="google" style={{maxWidth: "24px"}} /> Continue with Google</Button>
                <Form.Text>OR</Form.Text>
                <Form className='w-75 text-center'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                    <Button variant="primary" className='w-100' type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='light' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

import React, { useState } from 'react'
import {Navbar, Container, Button} from 'react-bootstrap'
import AuthModal from '../utility/AuthModal'


export default function Header() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">IkiFiles</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button onClick={()=>setShowModal(true)}>Login / Regiter</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <AuthModal show={showModal} onHide={()=>setShowModal(false)}/>
        </>
    )
}

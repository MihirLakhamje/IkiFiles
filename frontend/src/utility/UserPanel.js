import React from 'react'
import {
    ListGroup,
    Navbar
} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function UserPanel() {
    return (
        <>
                <Navbar className=''>
                    <ListGroup variant="flush" className='d-flex gap-5 fs-4 ms-2 fw-bold'>

                        <ListGroup.Item>
                            <Link className='text-decoration-none text-dark' to="/user/home">Home</Link>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Link className='text-decoration-none text-dark' to="/user/profile">Profile</Link>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Link className='text-decoration-none text-dark' to="/user/qoutes">Qoutes</Link>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Link className='text-decoration-none text-dark' to="/user/activity">Activity</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Navbar>
        </>
    )
}

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import UserPanel from '../utility/UserPanel'
import Home from './Home'
import Header from '../headerfooter/Header'

export default function User() {
    return (
        <>  
            <Container className=''>
                <Header loginref="/" btnText="Logout" />
                <Row>
                    <Col lg={2}>
                        <UserPanel />
                    </Col>

                    <Col lg={8} className="border-start">
                        <Routes>
                            <Route path='/home' element={<Home />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

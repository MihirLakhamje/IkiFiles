import React from 'react'
import {
    Container,
    Navbar
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import brandlogo from '../assets/brandlogowhite.svg'

export default function Header(props) {


    return (
        <>
            <Navbar className='pt-4 w-100'>
                <Container className='px-0'><Link className='text-decoration-none text-dark' to="/"><img src={brandlogo} alt="IkiFiles" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link className='btn btn-primary text-light' to={props.loginref}>{props.btnText}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

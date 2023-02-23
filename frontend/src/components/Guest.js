import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import AuthModal from '../utility/AuthModal';


export default function Guest() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Container className='d-flex align-items-center' style={{height:"91vh"}}>
                <div className='two-lines-quote d-flex flex-column gap-4'>
                    <Container>
                        <h1 className='mb-3 quote'>&ldquo;Inside each of us is a natural-born storyteller, waiting to be released.&rdquo; -Robin Moore</h1>
                        <h2 className='fs-5 '>Write about your own journey</h2>
                    </Container>
                    <Container>
                        <Button onClick={()=>setShowModal(true)}>Get Started</Button>
                    </Container>
                </div>
            </Container>

            <AuthModal show={showModal} onHide={()=>setShowModal(false)}/>
        </>
    )
}

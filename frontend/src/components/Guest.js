import { Link } from 'react-router-dom';
import { Container} from 'react-bootstrap'
import Header from '../headerfooter/Header';


export default function Guest() {

    return (
        <>  
        <Container>

            <Header loginref="/login" btnText="Login / Register"/>
            <Container className='d-flex align-items-center'>
                <div className='two-lines-quote d-flex flex-column gap-4'>
                    <Container>
                        <h1 className='mb-3 quote'>&ldquo;Inside each of us is a natural-born storyteller, waiting to be released.&rdquo; -Robin Moore</h1>
                        <h2 className='fs-5 '>Write about your own journey</h2>
                    </Container>
                    <Container>
                    <Link className='btn btn-primary text-light' to="/login">Get Started</Link>
                    </Container>
                </div>
            </Container>
        </Container>
        </>
    )
}

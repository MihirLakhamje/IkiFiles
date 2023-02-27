import React from 'react'
import { Container } from "react-bootstrap"

export default function Home() {
    return (
        <>
            <div>
                <h2 className='fs-5 pt-1'>Home</h2>
                <div className="mt-4">
                    <form>
                        <div className="mb-2">
                            <textarea className="form-control textInput" placeholder="How's your day today?"></textarea>
                        </div>
                        <button type="submit" className='btn btn-primary mt-1'>Post</button>
                    </form>
                </div>
                <hr />
                <Container>
                    There is nothing to show.
                </Container>
            </div>
        </>
    )
}

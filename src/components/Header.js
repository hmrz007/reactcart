import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://i.postimg.cc/wMV0LGBn/restaurant.png"
                            width="70"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
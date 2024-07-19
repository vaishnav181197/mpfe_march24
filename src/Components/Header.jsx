import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar className="bg-info">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={'/'} className='text-decoration-none'>
                            <i className="fa-solid fa-cloud-arrow-up fa-bounce" style={{ color: "#74C0FC", }} />{' '}
                            <span className='h3'>Media Player</span>
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
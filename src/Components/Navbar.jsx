import { Container, Navbar, Nav } from 'react-bootstrap';


function MenuNavegacion() {
    return (
        <>
            <Navbar bg="black" variant="dark" sticky="top">
                <Container>
                    <Navbar.Collapse className="justify-content-start">
                        <Navbar.Text>
                            <a href="/" > <img src={logoTesla} alt="" className='logoTesla' /> </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/Shop">Shop</Nav.Link>
                        <Nav.Link href="/aboutUs">About us</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuNavegacion;
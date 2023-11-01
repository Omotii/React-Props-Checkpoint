import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css'

const NavigationBar = () => {
    return (
        <>
            <Container>
                <Navbar expand="lg" className="nav">
                    <Nav>
                        <Nav.Link href="#home" className="me-2">Home</Nav.Link>
                        <Nav.Link href="#dream" className="me-2">Dream Team</Nav.Link>
                        <Nav.Link href="#version" className="me-2">Version Info</Nav.Link>
                        <Nav.Link href="#license" className="me-2">Licenses</Nav.Link>
                        <Nav.Link href="#license" className="me-2">Online Supprot</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </>
    )
}

export default NavigationBar;
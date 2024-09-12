import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from './LoginButton';

function NavBar() {
    const body = document.querySelector('body');
    const dataTheme = body.getAttribute("data-theme");
    console.log(dataTheme);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">
          <h2>Samvidhan</h2>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Learn" id="basic-nav-dropdown">
              <NavDropdown.Item href="/preamble">Quick Start</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Beginner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Intermediate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Advanced</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Advocate</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Browse" id="basic-nav-dropdown">
              <NavDropdown.Item href="/word">Word Game</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <LoginButton />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
import { Navbar, Nav, Container } from "react-bootstrap";

interface NavBarProps {
  toggleAuth: () => void;
  toggleFirestore: () => void;
  toggleStorage: () => void;
  toggleBootstrap: () => void;
}

function NavBar({
  toggleAuth,
  toggleFirestore,
  toggleStorage,
  toggleBootstrap,
}: NavBarProps) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Firebase Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={toggleAuth}>
              Auth Demo
            </Nav.Link>
            <Nav.Link href="#" onClick={toggleFirestore}>
              Firestore Demo
            </Nav.Link>
            <Nav.Link href="#" onClick={toggleStorage}>
              Storage Demo
            </Nav.Link>
            <Nav.Link href="#" onClick={toggleBootstrap}>
              Bootstrap Demo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

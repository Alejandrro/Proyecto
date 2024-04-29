import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ProgramarKeting</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/ventas">Ventas</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/clientes">Clientes</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

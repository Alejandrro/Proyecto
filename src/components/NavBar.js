import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="barra" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/">ProgramarKeting</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/persianas">Persianas</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/alfombras">Alfrombras</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactos">Contactos</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
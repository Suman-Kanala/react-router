import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Brew</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/ProductList">Products</NavLink>

            <NavLink to="/contact">contact</NavLink>
            <NavLink to="/admin">admin</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

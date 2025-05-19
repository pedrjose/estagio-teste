import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">NOW Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/top">Top Rated</Nav.Link>
            <Nav.Link href="/rating">Rating</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

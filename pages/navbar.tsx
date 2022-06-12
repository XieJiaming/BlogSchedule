import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/posts'>Posts</Nav.Link>
          <Nav.Link href='/AboutPage'>About Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
        <Navbar className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>User Table</Navbar.Brand>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBar
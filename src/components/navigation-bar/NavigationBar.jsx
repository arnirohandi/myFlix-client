import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar className="custom-navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          myFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login" className="navbar-link">
                  LOGIN
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="navbar-link">
                  SIGNUP
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/" className="navbar-link">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className="navbar-link">
                  PROFILE
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut} className="navbar-link">
                  LOGOUT
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

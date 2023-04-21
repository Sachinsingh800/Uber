import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGlobe} from 'react-icons/bs';
import { CgMenuGridO} from 'react-icons/cg';

function NavigationBar() {
  return (
    <Navbar style={{backgroundColor:"white", zIndex:"99"}}  >
      <Container >
        <Navbar.Brand href="/">Uber </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="company" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our offerings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">How Uber works</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Global citizenship</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Newsroom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Investor relations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link href="#home">Safety</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            <div style={{display:"flex",width:"60vw", justifyContent:"flex-end"} }>
            <Nav.Link href="/Language"><BsGlobe /> EN</Nav.Link>
            <Nav.Link href="link"><CgMenuGridO /> Products</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="#link">Sign Up</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar
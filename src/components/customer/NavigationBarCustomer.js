import Logo from "../../images/Frame.png"
import {Navbar,Container,Nav} from "react-bootstrap"

function NavigationBarCustomer() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark">
    <Container>
    <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="Logo" />
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav className="navContent">
        <Nav.Link className="text-light" href="#deets">Complain</Nav.Link>
        <Nav.Link className="text-light" href="#memes">Profile</Nav.Link>
        <Nav.Link className="text-light" href="#memes">Logout</Nav.Link>
  
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default NavigationBarCustomer
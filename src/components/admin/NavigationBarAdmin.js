import Logo from "../../images/Frame.png"
import {Navbar,Container,Nav} from "react-bootstrap"

function NavigationBarAdmin() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark">
    <Container>
    <Navbar.Brand href="/home">
          <img className="logo" src={Logo} alt="Logo" />
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav className="navContent">
        <Nav.Link className="text-light" href="/admin-complain">Complain</Nav.Link>
        <Nav.Link className="text-light" href="/category">Category</Nav.Link>
        <Nav.Link className="text-light" href="/product-list">Product</Nav.Link>
        <Nav.Link className="text-light" href="#">Logout</Nav.Link>
  
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default NavigationBarAdmin
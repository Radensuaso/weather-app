import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiWeatherSunny } from "react-icons/ti";

const NavBarTop = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <TiWeatherSunny />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/watchList" className="nav-link">
            Watch List
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBarTop;

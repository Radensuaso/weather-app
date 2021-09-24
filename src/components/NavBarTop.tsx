import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiWeatherSunny } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { changeToMetric, changeToImperial } from "../redux/actions";

const NavBarTop = () => {
  const dispatch = useDispatch();

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          <TiWeatherSunny />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
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
            <NavDropdown title="Units" id="units-dropdown">
              <NavDropdown.Item onClick={() => dispatch(changeToMetric())}>
                Metric
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => dispatch(changeToImperial())}>
                Imperial
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search a place"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarTop;

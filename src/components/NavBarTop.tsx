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
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent } from "react";
import {
  changeToMetric,
  changeToImperial,
  changeSearch,
  fetchNextDays,
} from "../redux/actions";
import ReduxStore from "../types/ReduxStore";
import { useEffect } from "react";

const NavBarTop = () => {
  const search = useSelector((state: ReduxStore) => state.queries.search);
  const apiUrl = useSelector((state: ReduxStore) => state.queries.apiUrl);
  const dispatch = useDispatch();

  const searchCity = (e: FormEvent) => {
    e.preventDefault();
    dispatch(fetchNextDays(apiUrl, search));
  };

  useEffect(() => {
    dispatch(fetchNextDays(apiUrl, search));
  }, [apiUrl]);

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
          <Form className="d-flex" onSubmit={searchCity}>
            <FormControl
              type="search"
              placeholder="Search a place"
              className="mr-2"
              aria-label="Search"
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch(changeSearch(e.target.value))
              }
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarTop;

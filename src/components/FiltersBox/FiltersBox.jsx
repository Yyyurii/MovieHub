import "./FiltersBox.scss";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

const FiltersBox = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="filter-box">
      <Container fluid>
        <Navbar.Brand href="#home">Filters</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Sort by"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Most popular</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Release date</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vote average</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Genre"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Advanture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Year"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">2022</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2021</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2020</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Rating"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">10</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">9</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">8</NavDropdown.Item>
            </NavDropdown>
            <Button className="filter-box__btn-clear" variant="outline-light" size="sm">
              Clear filters
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FiltersBox;

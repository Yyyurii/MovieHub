import Offcanvas from "react-bootstrap/Offcanvas";
import "./navSidebar.scss";

import NavMenu from "../NavMenu";

const NavSidebar = ({ show, toggleOffCanvas }) => {
  return (
    <Offcanvas show={show} onHide={toggleOffCanvas}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <NavMenu toggleOffCanvas={toggleOffCanvas} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavSidebar;

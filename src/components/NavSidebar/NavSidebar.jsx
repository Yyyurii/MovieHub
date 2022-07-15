import Offcanvas from "react-bootstrap/Offcanvas";
import "./navSidebar.scss";

import NavMenu from "../NavMenu";

const NavSidebar = ({ show, onHide }) => {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <NavMenu />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavSidebar;

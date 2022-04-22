import { Offcanvas, Nav, Navbar, Container } from "react-bootstrap";
import { React } from "react";
import { FaUsers, FaRegUser, FaRegListAlt, FaUniversity } from "react-icons/fa";
import "./sidebar.css";

function Sidebar(props) {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand className="navbar-brand" href="/">
          <FaUsers style={{ fontSize: "35px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className="bg-light"
        >
          <Offcanvas.Header className="p-3" closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              style={{ borderBottom: "solid 3px #019fb6" }}
            >
              <FaUsers style={{ marginRight: "10px", fontSize: "25px" }} />
              <span>User Domain</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="px-3 py-1">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/" className="text-dark fw-bold">
                <FaRegUser style={{ marginRight: "5px", fontSize: "15px" }} />
                User Form
              </Nav.Link>
              <Nav.Link href="/userlist" className="text-dark fw-bold">
                <FaRegListAlt
                  style={{ marginRight: "5px", fontSize: "15px" }}
                />
                User List
              </Nav.Link>
              <Nav.Link href="/colleges" className="text-dark fw-bold">
                <FaUniversity
                  style={{ marginRight: "5px", fontSize: "15px" }}
                />
                Colleges
              </Nav.Link>
            </Nav>
            <div className="mb-3" style={{ position: "absolute", bottom: "0" }}>
              {props.footer_component}
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Sidebar;

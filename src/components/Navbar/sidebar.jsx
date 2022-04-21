import { Offcanvas, Nav, Navbar, Container } from "react-bootstrap";
import { React } from "react";
import "./sidebar.css";

function Sidebar(props) {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand className="navbar-brand" href="/">
          <i
            className="fa fa-users animated bounce infinite"
            style={{ fontSize: "30px" }}
          ></i>
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
              <i
                className="fa fa-users"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
              <span>User Domain</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="px-3 py-1">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/" className="text-dark fw-bold">
                <i
                  className="fa fa-sticky-note"
                  style={{ marginRight: "5px" }}
                ></i>
                User Form
              </Nav.Link>
              <Nav.Link href="/userlist" className="text-dark fw-bold">
                <i className="fa fa-th-list" style={{ marginRight: "5px" }}></i>
                User List
              </Nav.Link>
              <Nav.Link href="/colleges" className="text-dark fw-bold">
                <i
                  className="fa fa-graduation-cap"
                  style={{ marginRight: "5px" }}
                ></i>
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

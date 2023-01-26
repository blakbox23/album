import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "../App.css";

function AppNav() {

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="bg-white">
          <Container className="d-flex justify-content-between">
          <div className="fw-bold fs-5">JIL Album</div>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="togle"
            />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Sokoni
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div style={{ marginLeft: "auto" }}>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link to="/" as={NavLink}>
                      Home
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                      About
                    </Nav.Link>
                    <Nav.Link to="/login" as={NavLink}>
                      Login
                    </Nav.Link>
                    <Nav.Link to="/sign-up" as={NavLink}>
                      Sign up
                    </Nav.Link>

                    <Nav.Link
                      className={"d-md-none d-sm-none"}
                      to="/login"
                      as={NavLink}
                    >
                      Login
                    </Nav.Link>
                  </Nav>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

    

           
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default AppNav;

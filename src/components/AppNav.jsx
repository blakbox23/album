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
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="bg-white mb-3"
        >
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
                  JiL Album
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div style={{ marginLeft: "auto" }}>
                  {true ? (
                    <>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link to="/home" as={NavLink}>
                          Home
                        </Nav.Link>
                        <Nav.Link to="/about" as={NavLink}>
                          Log out
                        </Nav.Link>
                      </Nav>
                    </>
                  ) : (
                    <>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link to="/login" as={NavLink}>
                          Log in
                        </Nav.Link>
                        <Nav.Link to="/sign-up" as={NavLink}>
                         Sign up
                        </Nav.Link>
                      </Nav>
                    </>
                  )}
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

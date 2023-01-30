import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../authConfig/firebase";
import {  signOut } from "firebase/auth";
import "../App.css";

function AppNav() {

  const user = sessionStorage.getItem('albumUser');

  const navigate = useNavigate()
  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
    sessionStorage.removeItem('albumUser');
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    console.log(error)
    });
}

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
                  {user ? (
                    <>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link to="/home" as={NavLink}>
                          Home
                        </Nav.Link>
                        <button onClick={handleLogout}>
                          Log out
                        </button>
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

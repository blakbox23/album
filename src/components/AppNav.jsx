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


const navStyle = (user ? 'mb-3 text-dark bg-white' : 'mb-3 text-white bg-transparent')

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className= {navStyle}
        >
          <Container className="d-flex justify-content-between">
            <div className="fw-bold fs-5">JIL Album</div>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="togle burger-menu"
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
                <div style={{ marginLeft: "auto"}}>
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
                      <Nav className="justify-content-end flex-grow-1 pe-3 ">
                        <Nav.Link to="/login" as={NavLink} className="pri-cta mobile-links">
                          Log in
                        </Nav.Link>
                        <Nav.Link to="/sign-up" as={NavLink} className="pri-cta mobile-links">
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

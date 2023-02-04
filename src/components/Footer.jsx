import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <div className="w-100 bg-dark">
        <Row className=" p-2 justify-content-evenly w-75 m-auto ">

          <Col style={{ textDecoration: 'none' }}>
            <div className="m-2"><Link to="https://www.linkedin.com/in/peter-mbuthia/" className=" text-decoration-none text-white fw-bold">Linked In</Link></div>
            <div className="m-2"><Link to="/" className=" text-decoration-none text-white fw-bold">Upwork</Link></div>
          </Col>

          <Col style={{ textDecoration: 'none' }}>
            <div className="m-2"><Link to="https://www.twitter.com/blackbox23" className=" text-decoration-none text-white fw-bold">Twitter</Link></div>
            <div className="m-2"><Link to="https://www.linkedin.com/in/peter-mbuthia/" className=" text-decoration-none text-white fw-bold">Connect</Link></div>

          </Col>

          <Col style={{ textDecoration: 'none' }}>
            <div className="m-2"><Link to="/https://www.github.com/blakbox23" className=" text-decoration-none text-white fw-bold">Github</Link></div>
            <div className="m-2"><Link to="/" className=" text-decoration-none text-white fw-bold">FAQ</Link></div>

          </Col>
        </Row>

      </div>
    </>
  );
}
export default Footer;

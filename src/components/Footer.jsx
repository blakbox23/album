import { Col, Row } from 'react-bootstrap';

export function Footer() {
  return (
    <>
      <div className="w-100 bg-dark">
        <Row className=" p-2 justify-content-evenly w-75 m-auto ">

          <Col style={{ textDecoration: 'none' }}>
            <div className="m-2"><a href="https://www.linkedin.com/in/peter-mbuthia/" className=" text-decoration-none text-white fw-bold" target="blank">Linked in</a></div>

          </Col>

          <Col style={{ textDecoration: 'none' }}>
            <div className="m-2"><a href="https://www.twitter.com/blakbox23" className=" text-decoration-none text-white fw-bold" target="blank">Twitter</a></div>

          </Col>

          <Col style={{ textDecoration: 'none' }}>
            <div className="m-2"><a href="https://www.github.com/blakbox23/" className=" text-decoration-none text-white fw-bold" target="blank">GitHub</a></div>

          </Col>
        </Row>

      </div>
    </>
  );
}
export default Footer;

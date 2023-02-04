import { useNavigate } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { FaUserFriends } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';
import { GoCreditCard } from 'react-icons/go';
import { Footer } from '../components/Footer';
import AppNav from '../components/AppNav';

function LandingPage() {
  const navigate = useNavigate();
  const user = sessionStorage.getItem('albumUser');

  const handleLoggedOut = () => {
    navigate('/login');
  };
  const handleLoggedIn = () => {
    navigate('/home');
  };

  return (
    <>
      <div className="hero" />
      <div className="landing-nav"><AppNav /></div>

      <div className="overlay">
        <div className="hero-text">

          <div className="mb-4 text-center fw-bold p-3">
            <h1>THE BEST DIGITAL GALLERY</h1>
            <p>We are creative! Log in and find your inspiration</p>
          </div>
          <div />
          <div className="w-75 d-flex justify-content-center align-items-center mx-auto">
            {user === null ? (
              <button type="button" onClick={handleLoggedOut}>
                Log in
              </button>
            ) : (
              <button type="button" onClick={handleLoggedIn}>
                Home
              </button>
            )}
          </div>

        </div>
      </div>

      <div className="paralax-3" />

      <div className="about-section text-center w-75 m-auto py-5 my-5">
        <Row xs={1} sm={2} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="mt-3 mb-3 fw-bold">
                  Join the Community
                </Card.Title>
                <Card.Text>
                  Join a professional community of artists sharing their work online.
                  Some quick example text to build on the card title and
                  make up the bulk of
                </Card.Text>
                <div className="mt-2 mb-2">
                  <FaUserFriends style={{ fontSize: '2.5rem' }} />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            {' '}
            <Card>
              <Card.Body>
                <Card.Title className="mt-3 mb-3 fw-bold">
                  Access User Albums
                </Card.Title>
                <Card.Text>
                  View a users portfolio of albums and get inspired. Some quick example
                  text to build on the card title and
                  make up the bulk of the  content.
                </Card.Text>
                <div className="mt-2 mb-2">
                  <GrGallery style={{ fontSize: '2.5rem' }} />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="mt-3 mb-3 fw-bold">
                  View
                </Card.Title>
                <Card.Text>
                  View and edit a resource title. Some quick example
                  text to build on the card title and
                  make up the bulk of the content.
                </Card.Text>
                <div className="mt-2 mb-2">
                  <GoCreditCard style={{ fontSize: '2.5rem' }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* <div className="paralax-3" /> */}
      <Footer />

    </>
  );
}

export default LandingPage;

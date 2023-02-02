import AppNav from '../components/AppNav';

function LandingPage() {
  // const user = sessionStorage.getItem('albumUser');

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
          <div>
            {/* <p>We are open 24/7 including the holidays. Book a ride with us today!</p> */}
          </div>
          <div className="w-75 d-flex justify-content-center align-items-center mx-auto">
            <button type="button">
              Log in
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default LandingPage;

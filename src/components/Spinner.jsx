import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <div className="d-flex align-items-center justify-content-center spinner">
    <Spinner animation="border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
    
  );
}

export default LoadingSpinner;
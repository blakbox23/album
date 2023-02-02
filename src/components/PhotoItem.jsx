import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function PhotoItem({ title, thumbnail }) {
  return (
    <>
      <div className="m-2 text-muted">
        <Card style={{ width: '100%', margin: 'auto' }}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title className="fw-light text-capitalize">{title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

PhotoItem.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
PhotoItem.defaultProps = {
  title: null,
  thumbnail: null,
};

export default PhotoItem;

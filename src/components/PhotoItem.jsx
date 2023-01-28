import { Card } from "react-bootstrap";
import AppNav from "./AppNav";

function PhotoItem({ title, thumbnail }) {
  return (
    <>
      <div className="m-2 text-muted">
        <Card style={{ width: "100%", margin:"auto" }}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title className="fw-light">{title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default PhotoItem;

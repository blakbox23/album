import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum } from "../store/Actions/AlbumsActions";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PhotoItem from "../components/PhotoItem";
import { Row } from "react-bootstrap";
import AppNav from "../components/AppNav";

function AlbumDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAlbum(id));
  }, [dispatch]);

  const { album } = useSelector((state) => state.albums);
  const { photos } = useSelector((state) => state.albums);

  return (
    <>
      <AppNav />

      {album && (
        <div className="p-4 mb-1 text-center">
          <p className=" mb-0 text-uppercase fw-bold">{album.title}</p>
           <p className="fw-light"> ({photos.length}) photos</p>
        </div>
      )}
      <div style={{ width: "86%" }} className="mx-auto">
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">
          {photos &&
            photos.map((photo) => (
              <div key={photo.id} className="mx-auto">
                <NavLink
                  to={`/photos/${photo.id}`}
                  className="text-decoration-none"
                >
                  <PhotoItem
                    title={photo.title}
                    thumbnail={photo.thumbnailUrl}
                  />
                </NavLink>
              </div>
            ))}
        </Row>
      </div>
    </>
  );
}

export default AlbumDetails;

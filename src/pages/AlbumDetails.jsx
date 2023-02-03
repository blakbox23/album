import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import PhotoItem from '../components/PhotoItem';
import { fetchAlbum } from '../store/Actions/AlbumsActions';
import LoadingSpinner from '../components/Spinner';

function AlbumDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAlbum(id));
  }, [id, dispatch]);

  const { album } = useSelector((state) => state.albums);
  const { photos, pending } = useSelector((state) => state.albums);

  const [isLoaded, setIsLoaded] = useState(pending);

  if (pending === true) {
    setTimeout(() => setIsLoaded(true), 1000);
  }

  return (
    <>
      <div className="app-bg">
        {isLoaded === false ? (
          <LoadingSpinner />
        ) : (
          <div style={{ width: '86%' }} className="mx-auto">
            {album && (
            <div className="p-4 mb-1 text-center">
              <p className=" mb-0 text-uppercase fw-bold">{album.title}</p>
              <p className="fw-light">
                {' '}
                (
                {photos.length}
                ) photos
              </p>
            </div>
            )}
            <Row xs={1} sm={2} md={2} lg={3} className="g-4">
              {photos
              && photos.map((photo) => (
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
        )}
      </div>
    </>
  );
}

export default AlbumDetails;

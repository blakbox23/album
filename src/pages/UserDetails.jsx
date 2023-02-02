import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { fetchUser, fetchUserAlbums } from '../store/Actions/UsersActions';
import LoadingSpinner from '../components/Spinner';

import AlbumItem from '../components/AlbumItem';

function UserDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { user } = useSelector((state) => state.users);
  const { userAlbums, pending } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchUserAlbums(id));
  }, [id, dispatch]);

  const [isLoaded, setIsLoaded] = useState(pending);

  if (pending === true) {
    setTimeout(() => setIsLoaded(true), 700);
  }

  return (
    <>
      <div className="app-bg">
        {isLoaded === false ? (
          <LoadingSpinner />
        ) : (
          user && (
            <div>
              <div className="d-flex justify-content-around py-5 flex-wrap">
                <div className="d-flex flex-column justify-content-between">
                  <p>
                    <span className="fw-bold" data-testid="name">
                      NAME
                    </span>
                    {' '}
                    {user.name}
                  </p>
                  <p>
                    <span className="fw-bold">USERNAME </span>
                    {user.username}
                  </p>
                  <p>
                    <span className="fw-bold">PHONE </span>
                    {' '}
                    {user.phone}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="fw-bold">EMAIL </span>
                    {' '}
                    {user.email}
                  </p>
                  <p>
                    <span className="fw-bold" data-testid="website">
                      WEBSITE
                      {' '}
                    </span>
                    {user.website}
                  </p>
                </div>
              </div>

              <div className=" pt-5">
                <p className="text-center fs-4 fw-bold">ALBUMS</p>

                <div>
                  {userAlbums
                    && userAlbums.map((userAlbum) => (
                      <div key={userAlbum.id} className="album-list">
                        <NavLink
                          to={`/albums/${userAlbum.id}`}
                          className="text-decoration-none text-capitalize"
                        >
                          <AlbumItem title={userAlbum.title} />
                        </NavLink>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default UserDetails;

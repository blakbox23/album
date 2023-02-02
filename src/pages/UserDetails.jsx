import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchUser } from "../store/Actions/UsersActions";
import { fetchUserAlbums } from "../store/Actions/UsersActions";
import LoadingSpinner from "../components/Spinner";

import { useParams } from "react-router-dom";
import AlbumItem from "../components/AlbumItem";
import AppNav from "../components/AppNav";

function UserDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { user } = useSelector((state) => state.users);
  const { userAlbums, pending } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserAlbums(id));
  }, [dispatch]);

  const [isLoaded, setIsLoaded] = useState(pending);

  if (pending == true) {
    setTimeout(() => setIsLoaded(true), 700);
  }

  return (
    <>
      {isLoaded == false ? (
        <LoadingSpinner />
      ) : (
        user && (
          <div>
            <div className="d-flex justify-content-around py-4  mb-3 flex-wrap">
              <div className="d-flex flex-column justify-content-between">
                <p>
                  <span className="fw-bold" data-testid="name">
                    Name
                  </span>{" "}
                  {user.name}
                </p>
                <p>
                  <span className="fw-bold">Username </span>
                  {user.username}
                </p>
                <p>
                  <span className="fw-bold">Phone</span> {user.phone}
                </p>
              </div>
              <div>
                <p>
                  <span className="fw-bold">Email</span> {user.email}
                </p>
                <p>
                  <span className="fw-bold" data-testid="website">
                    Website{" "}
                  </span>
                  {user.website}
                </p>
              </div>
            </div>
            <p className="text-center fs-4 fw-bold">ALBUMS</p>

            {userAlbums &&
              userAlbums.map((userAlbum) => (
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
        )
      )}

      <hr className="my-2" />
    </>
  );
}

export default UserDetails;

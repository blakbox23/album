import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchUser } from "../store/Actions/UsersActions";
import { fetchUserAlbums } from "../store/Actions/UsersActions";

import { useParams } from "react-router-dom";
import AlbumItem from "../components/AlbumItem";
import AppNav from "../components/AppNav";

function UserDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { user } = useSelector((state) => state.users);
  const { userAlbums } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserAlbums(id));
  }, [dispatch]);

  return (
    <>
      {user && (
        <div className="d-flex justify-content-around py-4  mb-3 flex-wrap">
          <div className="d-flex flex-column justify-content-between">
            <p >
              <span className="fw-bold" >Name</span> <span data-testid="name">{user.name}</span>
            </p>
            <p>
              <span className="fw-bold">Email</span> {user.email}
            </p>
            <p>
              <span className="fw-bold">Phone</span> {user.phone}
            </p>
          </div>
          <div>
            <p>
              <span className="fw-bold">City </span>
              {user.address}
            </p>
            <p>
              <span className="fw-bold">Company </span> {user.comany}
            </p>
            <p>
              <span className="fw-bold" data-testid="website">Website </span>
              {user.website}
            </p>
          </div>
        </div>
      )}

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
      <hr className="my-2" />
    </>
  );
}

export default UserDetails;

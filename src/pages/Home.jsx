import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/Actions/UsersActions";
import { fetchAlbums } from "../store/Actions/AlbumsActions";
import { Row } from "react-bootstrap";
import AppNav from "../components/AppNav";
import UserItem from "../components/UserItem";
import LoadingSpinner from "../components/Spinner";
import "../App.css";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const { users, pending } = useSelector((state) => state.users);

  const [isLoaded, setIsLoaded] = useState(pending);

  if (pending == true) {
    setTimeout(() => setIsLoaded(true), 500);
  }

  return (
    <>
      <div className="app-bg">
        {isLoaded == false ? (
          <LoadingSpinner />
        ) : (
          <Row xs={1} sm={2} md={3} className="g-3 px-4 w-75 m-auto py-4">
            {users &&
              users.map((user) => (
                <NavLink
                  to={`/users/${user.id}`}
                  className="text-decoration-none"
                >
                  <div key={user.id}>
                    <UserItem
                      name={user.username}
                      id={user.id}
                      email={user.email}
                      website={user.website}
                      phone={user.phone}
                    />
                  </div>
                </NavLink>
              ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default Home;

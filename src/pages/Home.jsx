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
      {isLoaded == false ? (
        <LoadingSpinner />
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-3 ps-5 pe-5">
          {users &&
            users.map((user) => (
              <NavLink
                to={`/users/${user.id}`}
                className="text-decoration-none"
              >
                <div key={user.id} className="border">
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

      <hr />
    </>
  );
}

export default Home;

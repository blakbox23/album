import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/Actions/UsersActions";
import { fetchAlbums } from "../store/Actions/AlbumsActions";

import AppNav from "../components/AppNav";
import UserItem from "../components/UserItem";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const { users } = useSelector((state) => state.users);
  const { albums } = useSelector((state) => state.albums);



  return (
    <>
      <AppNav />
      <p>home</p>
      {users &&
        users.map((user) => (
          <NavLink to={`/users/${user.id}`}>
            <div key={user.id}>
              <UserItem name={user.name} id={user.id}/>
            </div>
          </NavLink>
        ))}

        <hr/>

        {albums &&
        albums.map((album) => (
          <NavLink to={`/albums/${album.id}`}>
            <div key={album.id}>
              <p> name = {album.title}</p>
            </div>
          </NavLink>
        ))}
    </>
  );
}

export default Home;

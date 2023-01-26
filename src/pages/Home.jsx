import React, { useEffect, } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from '../store/Actions/UsersActions'
import AppNav from "../components/AppNav";

function Home() {
    const dispatch =useDispatch();

    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch])

    const { users } = useSelector(state => state.users)


  return (
    <>
      <AppNav />
      <p>home</p>
      {users &&
        users.map((user) => (
            <NavLink to={ `/users/${user.id}`}>
          <div key={user.id}>
            <p>  name = {user.name}</p>
          </div>
          </NavLink>
        ))}
    </>
  );
}

export default Home;

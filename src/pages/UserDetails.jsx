import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/Actions/UsersActions";
import { fetchUserAlbums } from "../store/Actions/UsersActions";

import { useParams } from "react-router-dom";



function UserDetails(){

    const dispatch = useDispatch();
    const { id } = useParams()

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
        { user.length > 0 && (
            <div>
           <p>{user[0].name}</p>
           <p>{user[0].email}</p>
           <p>{user[0].phone}</p>
           </div>
          )}

    { userAlbums &&
        userAlbums.map((userAlbum) => (
          <div key={userAlbum.id}>
            <p>{userAlbum.title}</p>
          </div>
     ))}
          
        </>
    )
        
    }

export default UserDetails;
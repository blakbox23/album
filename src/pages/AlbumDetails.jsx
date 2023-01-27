import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum } from "../store/Actions/AlbumsActions";
import { useParams } from "react-router-dom";

function AlbumDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAlbum(id));
  }, [dispatch]);

  const { album } = useSelector((state) => state.albums);

  return (
    <>
      {album && (
        <div>
      <p>{ album.id }</p>
      <p>{ album.title }</p>
      </div>
      )}
    </>
  );
}

export default AlbumDetails;

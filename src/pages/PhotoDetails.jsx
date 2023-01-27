import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../store/Actions/PhotosActions";
import { useParams } from "react-router-dom";



function PhotoDetails(){

    const dispatch = useDispatch();
    const { id } = useParams()

    const { photo } = useSelector((state) => state.photo);

 
    useEffect(() => {
        dispatch(fetchPhoto(id));
      }, [dispatch]);

    return (<>
    

    {photo && (
        <div>
          <p>photo detailzs</p>
    <img src={photo.url} alt="" />
        </div>
      )}

    
    </>)
}

export default PhotoDetails;
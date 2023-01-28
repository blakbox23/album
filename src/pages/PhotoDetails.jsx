import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../store/Actions/PhotosActions";
import { useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import AppNav from "../components/AppNav";
import { BiEdit } from "react-icons/bi";

function PhotoDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { photo } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AppNav />
      {photo && (
        <div className="w-75 border mx-auto mt-5 mb-5">
          <div className="m-3 d-flex justify-content-between edit-hover text-muted">
            <h1 className="text-capitalize fs-5">{photo.title}</h1>
            <p class="edit-button" onClick={handleShow}>
              <BiEdit style={{ fontSize: "2rem" }} />
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <img src={photo.url} alt="no photo" style={{ width: "85%" }} />
          </div>
          <Modal show={show} onHide={handleClose} centered={true}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Edit Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <input
              className="p-2 ps-3 w-100"
              type="text"
              placeholder={photo.title}
              required
              name="email"
              // onChange={handleChange}
            />

            <Button type="submit" className="mt-3 mb-3" variant="secondary">
              Edit
            </Button>
          </form>
        </Modal.Body>
    
      </Modal>
        </div>
   
      )}


 
    </>
  );
}

export default PhotoDetails;

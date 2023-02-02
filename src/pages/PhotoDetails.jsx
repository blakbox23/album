import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../store/Actions/PhotosActions";
import { useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import AppNav from "../components/AppNav";
import { editPhoto } from "../store/Actions/PhotosActions";
import { BiEdit } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../components/Spinner";

function PhotoDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { photo, pending } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [dispatch]);

  const [isLoaded, setIsLoaded] = useState(pending);

  if (pending == true) {
    setTimeout(() => setIsLoaded(true), 1500);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    const values = { id: photo.id, title: e.target.title.value };
    dispatch(editPhoto(values));
    e.preventDefault();
    handleClose();
  };

  return (
    <>
    <div className="app-bg py-5">
      <ToastContainer />
      {isLoaded==false? (<LoadingSpinner />):(photo && (
        <div className="w-75 mx-auto">
          <div className="m-3 d-flex justify-content-between edit-hover text-muted">
            <h1 className="text-capitalize fs-5">{photo.title}</h1>
            <p className="edit-button" onClick={handleShow}>
              <BiEdit style={{ fontSize: "2rem" }} data-testid="editIcon" />
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
              <form onSubmit={handleSubmit} aria-label="edit">
                <input
                  className="p-2 ps-3 w-100"
                  type="text"
                  placeholder={photo.title}
                  name="title"
                  // onChange={handleChange}
                />
                <Button type="submit" className="mt-3 mb-3" variant="secondary">
                  Edit
                </Button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      ))}
      </div>
    </>
  );
}

export default PhotoDetails;

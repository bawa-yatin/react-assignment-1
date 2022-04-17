import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Button } from "bootstrap";

function CardForm(props) {
  let userList = JSON.parse(localStorage.getItem("data") || "[]");
  const navigate = useNavigate();

  // Switch Button
  const [toggle, setToggle] = useState(false);

  // For storing and displaying modal information
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rowSelect = (index) => {
    // console.log(index);
    setModalInfo(userList[index]);
    toogleTrueFalse();
  };

  const toogleTrueFalse = () => {
    setShowModal(handleShow);
  };

  // Methods for handling toggle switch
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const ModalContent = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalInfo.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>User Details</h5>
          <p className="mb-2">
            <i className="fa fa-envelope"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.email}</span>
          </p>
          <p className="mb-2">
            <i className="fa fa-phone"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.phone_number}</span>
          </p>
          <p className="mb-2">
            <i className="fa fa-address-card"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.address}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-success" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  };

  const handleOnClear = () => {
    // setUserList([]);
    localStorage.setItem("data", JSON.stringify([]));
    navigate("/userlist");
  };

  const style = {
    marginLeft: "10px",
  };

  return (
    <div>
      {userList.length == 0 ? (
        <h1 className="text-white msg-space p-5">
          No user messages as of now!
        </h1>
      ) : (
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick={toggler}
          />
        </div>
      )}
      {toggle ? (
        <span className="text-white">Changed</span>
      ) : (
        <div className="row card-space">
          {userList.map((user, index) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12-4 mt-4"
              key={index}
              id={index}
              onClick={() => {
                rowSelect(index);
              }}
            >
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-3">
                    <i className="fa fa-user"></i>
                    <span style={style}>{user.name}</span>
                  </h4>
                  <h6 className="card-subtitle mb-2">
                    <i className="fa fa-envelope"></i>
                    <span style={style}>{user.email}</span>
                  </h6>
                  <p className="card-text mb-2">
                    <i className="fa fa-phone"></i>
                    <span style={style}>{user.phone_number}</span>
                  </p>
                  <p className="card-text">
                    <i className="fa fa-commenting"></i>
                    <span style={style}>{user.message}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          {show ? <ModalContent /> : null}

          {userList.length != 0 ? (
            <button
              type="button"
              className="clear_btn mt-5"
              onClick={() => {
                handleOnClear();
              }}
            >
              Clear Data
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default CardForm;

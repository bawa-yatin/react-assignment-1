import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Button } from "bootstrap";

function CardForm(props) {
  // userList = JSON.parse(localStorage.getItem("data") || "[]");
  // const sorted_data = user_data.sort((a, b) => b.id - a.id);
  // console.log(sorted_data);
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userArr = JSON.parse(localStorage.getItem("data") || "[]");
    // userArr.sort()
    // console.log([index]);

    if (userArr) {
      setUserList(userArr);
    }
  }, []);

  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rowSelect = (index) => {
    console.log(index);
    setModalInfo(userList[index]);
    toogleTrueFalse();
  };

  const toogleTrueFalse = () => {
    setShowModal(handleShow);
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
    localStorage.setItem("data", JSON.stringify([]));
    navigate("/userlist");
  };

  const style = {
    marginLeft: "10px",
  };

  return (
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
      <button
        type="button"
        className="clear_btn mt-5"
        onClick={() => {
          handleOnClear();
        }}
      >
        Clear Data
      </button>
    </div>
  );
}

export default CardForm;

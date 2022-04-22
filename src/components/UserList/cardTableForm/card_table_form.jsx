import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {
  FaTrashAlt,
  FaAddressCard,
  FaBirthdayCake,
  FaUserTag,
  FaRegStickyNote,
  FaStickyNote,
  FaUniversity,
  FaVolleyballBall,
} from "react-icons/fa";
import "./card_table_form.css";

function CardTabelForm(props) {
  let userList = JSON.parse(localStorage.getItem("data") || "[]").reverse();

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

  // Method for handling and displaying Modal Content
  const ModalContent = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalInfo.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>User Details</h5>
          <p className="mb-2">
            <FaAddressCard />
            <span style={{ marginLeft: "10px" }}>{modalInfo.address}</span>
          </p>
          <p className="mb-2">
            <FaBirthdayCake />
            <span style={{ marginLeft: "10px" }}>{modalInfo.date}</span>
          </p>
          <p className="mb-2">
            <FaUserTag />
            <span style={{ marginLeft: "10px" }}>{modalInfo.gender}</span>
          </p>
          {modalInfo.hobbies.length > 1 ? (
            <p className="mb-2">
              <FaVolleyballBall />
              <span style={{ marginLeft: "10px" }}>
                {modalInfo.hobbies.join(", ")}
              </span>
            </p>
          ) : (
            <p className="mb-2">
              <FaVolleyballBall />
              <span style={{ marginLeft: "10px" }}>{modalInfo.hobbies}</span>
            </p>
          )}

          <hr />
          <h5>Other Details</h5>
          <p className="mb-2">
            <FaUniversity />
            <span style={{ marginLeft: "10px" }}>{modalInfo.college}</span>
          </p>
          <p className="mb-2">
            <FaStickyNote />
            <span style={{ marginLeft: "10px" }}>{modalInfo.shortbio}</span>
          </p>
          <p className="mb-2">
            <FaRegStickyNote />
            <span style={{ marginLeft: "10px" }}>{modalInfo.longbio}</span>
          </p>
        </Modal.Body>
      </Modal>
    );
  };

  // Method for deleting particular user from localStorage
  const itemSelect = (index) => {
    userList.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(userList));
    navigate("/userlist");
  };

  // Method for deleting all users in localStorage
  const handleOnClear = () => {
    localStorage.setItem("data", JSON.stringify([]));
    navigate("/userlist");
  };

  const style = {
    marginLeft: "10px",
    position: "relative",
    top: "3px",
  };

  return (
    <div>
      {userList.length == 0 ? (
        <h1 className="text-white msg-space p-5">
          No users registered as of now!
        </h1>
      ) : (
        <div className="form-check form-switch">
          <label
            className="form-check-label text-white fw-bold"
            for="flexSwitchCheckDefault"
            style={{ marginRight: "10px" }}
          >
            Card Layout
          </label>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggler}
            />
            <label
              className="form-check-label text-white fw-bold"
              for="flexSwitchCheckDefault"
            >
              Table Layout
            </label>
          </div>
        </div>
      )}
      {toggle ? (
        // Table Layout UI
        <div
          className="row pt-3 pb-5"
          style={{ width: "100%", marginLeft: "0" }}
        >
          {userList.length != 0 ? (
            <h3 className="text-center text-white mb-4">
              <u>Table Layout</u>
            </h3>
          ) : (
            ""
          )}
          <div
            className="container table-responsive"
            style={{ paddingLeft: "0px" }}
          >
            <table className="table table-striped table-hover table-light">
              <thead className="">
                <tr className="text-start">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  <th scope="col">College</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => {
                  return (
                    <tr
                      onClick={() => {
                        rowSelect(index);
                      }}
                      className="row-click text-start"
                      id={index + 1}
                      key={index + 1}
                    >
                      <th scope="row">{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.date}</td>
                      <td>{user.gender}</td>
                      <td>{user.address}</td>
                      <td>{user.college}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {show ? <ModalContent /> : null}

          {userList.length != 0 ? (
            <button
              type="button"
              className="clear_btn mt-3"
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
      ) : (
        // Card Layout UI

        <div
          className="row pt-4 pb-5"
          style={{ width: "100%", marginLeft: "0" }}
        >
          {userList.length != 0 ? (
            <h3 className="text-center text-white">
              <u>Card Layout</u>
            </h3>
          ) : (
            ""
          )}
          {userList.map((user, index) => (
            <div
              class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <div
                class="profile-card text-center"
                id={index}
                onClick={() => {
                  rowSelect(index);
                }}
                style={{ border: "none" }}
              >
                {user.gender === "Male" ? (
                  <img
                    src="https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
                    class="img img-responsive"
                    style={{ width: "100%" }}
                  />
                ) : (
                  <img
                    src="https://i.pinimg.com/474x/9a/74/63/9a7463417fbade000490782c75ad1598.jpg"
                    class="img img-responsive"
                    style={{ width: "100%" }}
                  />
                )}

                <div class="profile-content">
                  <div class="profile-name">
                    <h4 style={{ marginBottom: "0.2rem" }}>{user.name}</h4>
                    <p>{user.country}</p>
                  </div>
                  <div class="profile-description px-0 py-2">
                    {user.shortbio}
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="profile-overview">
                        <p className="mb-1">ADDRESS</p>
                        <h4 style={{ fontSize: "18px" }}>{user.address}</h4>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="profile-overview">
                        <p className="mb-1">GENDER</p>
                        <h4 style={{ fontSize: "18px" }}>{user.gender}</h4>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="profile-overview">
                        <p className="mb-1">DATE</p>
                        <h4 style={{ fontSize: "18px" }}>{user.date}</h4>
                      </div>
                    </div>
                    {user.hobbies.length > 1 ? (
                      <div class="col-6">
                        <div class="profile-overview">
                          <p className="mb-1">HOBBIES</p>
                          <h4 style={{ fontSize: "18px" }}>
                            {user.hobbies.join(", ")}
                          </h4>
                        </div>
                      </div>
                    ) : (
                      <div class="col-6">
                        <div class="profile-overview">
                          <p className="mb-1">HOBBIES</p>
                          <h4 style={{ fontSize: "18px" }}>{user.hobbies}</h4>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <h6
                className="text-start text-white"
                onClick={() => {
                  itemSelect(index);
                }}
              >
                <FaTrashAlt />
                <span style={style}>Delete Item?</span>
              </h6>
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

export default CardTabelForm;

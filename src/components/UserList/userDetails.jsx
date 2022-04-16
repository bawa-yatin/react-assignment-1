import { React, useEffect, useState } from "react";
import CardForm from "./cardForm/card_form";
import "./userDetails.css";

function UserList(props) {
  let user_details = JSON.parse(localStorage.getItem("data") || "[]");
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <section id="projects" style={{ backgroundColor: "#0a2b3c" }}>
      <div className="container">
        <div className="">
          <h1 className="text-center text-white text-underline pt-5">
            <u>{props.title}</u>
          </h1>

          {user_details.length == 0 ? (
            <h1 className="text-white msg-space">
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
          {toggle ? <span className="text-white">Changed</span> : <CardForm />}
        </div>
      </div>
    </section>
  );
}

export default UserList;

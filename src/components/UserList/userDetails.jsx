import { React, useEffect, useState } from "react";
import CardForm from "./cardForm/card_form";
import "./userDetails.css";

function UserList(props) {
  return (
    <section id="projects" style={{ backgroundColor: "#0a2b3c" }}>
      <div className="container">
        <div className="">
          <h1
            className="text-center text-white text-underline"
            style={{ padding: "20px 0 12px 0" }}
          >
            <u>{props.title}</u>
          </h1>

          <CardForm />
        </div>
      </div>
    </section>
  );
}

export default UserList;

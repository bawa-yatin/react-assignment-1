// Contact Section
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./detailsForm.css";

function DetailsForm(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone_number, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [message, setmessage] = useState("");
  const [success_msg, setSuccessMsg] = useState("");

  const setEmpty = () => {
    setname("");
    setemail("");
    setphone("");
    setaddress("");
    setmessage("");
  };

  const setLocalstorage = (ele) => {
    let data = JSON.parse(localStorage.getItem("data"));

    if (data) {
      data.push(ele);
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      localStorage.setItem("data", JSON.stringify([ele]));
    }
    setTimeout(function () {
      setSuccessMsg("Thank you for contacting us!");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var user = {
      name: name,
      email: email,
      phone_number: phone_number,
      address: address,
      message: message,
    };
    setEmpty();
    setLocalstorage(user);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="section-contact">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="header-section text-center">
                {!!success_msg ? (
                  <div className="alert alert-success p-2 mb-5" role="alert">
                    <h4 className="alert-heading mb-0">{success_msg}</h4>
                  </div>
                ) : (
                  ""
                )}

                <h2 className="title">
                  {props.overlap_title}
                  <span className="big-title">{props.title}</span>
                </h2>
                <p className="description mt-4 h5">
                  Let's catch up over a cup of coffee!
                </p>
              </div>
            </div>
          </div>
          <div className="form-contact">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-input">
                    <i className="fa fa-user"></i>
                    <input
                      type="text"
                      name="name"
                      placeholder="ENTER YOUR NAME"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-input">
                    <i className="fa fa-envelope"></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="ENTER YOUR EMAIL"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-input">
                    <i className="fa fa-phone"></i>
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="ENTER YOUR PHONE NUMBER"
                      autoComplete="off"
                      value={phone_number}
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      onChange={(e) => setphone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-input">
                    <i className="fa fa-location-arrow"></i>
                    <input
                      type="text"
                      name="address"
                      placeholder="ENTER YOUR ADDRESS"
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input">
                    <i className="fa fa-commenting"></i>
                    <textarea
                      placeholder="ENTER YOUR MESSAGE"
                      name="message"
                      autoComplete="off"
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="submit-input text-center">
                    <input type="submit" name="submit" value="SUBMIT NOW" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsForm;

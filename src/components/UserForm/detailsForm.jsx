// Contact Section
import { React, useEffect, useState } from "react";
import "./detailsForm.css";
import * as services from "../../services";

function DetailsForm(props) {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [shortbio, setshortbio] = useState("");
  const [longbio, setlongbio] = useState("");
  // const [success_msg, setSuccessMsg] = useState("");

  // const [selected, setSelected] = useState("");
  // let type = null;

  // /** This will be used to create set of options that user will see */
  // let options = null;

  // const changeSelectOptionHandler = (event) => {
  //   // setSelected(event.target.value);

  //   services
  //     .getCollegesAPI(event.target.value, "")
  //     .then((response) => {
  //       console.log(response.data);
  //       // type = response.data;
  //       setSelected(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // const algorithm = [
  //   "Searching Algorithm",
  //   "Sorting Algorithm",
  //   "Graph Algorithm",
  // ];
  // const language = ["C++", "Java", "Python", "C#"];
  // const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];

  /** Setting Type variable according to dropdown */
  // if (selected === "Algorithm") {
  //   type = algorithm;
  // } else if (selected === "Language") {
  //   type = language;
  // } else if (selected === "Data Structure") {
  //   type = dataStructure;
  // }

  // if (type) {
  //   options = type.map((el) => <option key={el}>{el}</option>);
  // }

  const setEmpty = () => {
    setname("");
    setdate("");
    setaddress("");
    setgender("Default");
    setshortbio("");
    setlongbio("");
  };

  const setLocalstorage = (ele) => {
    let data = JSON.parse(localStorage.getItem("data"));

    if (data) {
      data.push(ele);
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      localStorage.setItem("data", JSON.stringify([ele]));
    }
    // setTimeout(function () {
    //   setSuccessMsg("Thank you for contacting us!");
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var user = {
      name: name,
      date: date,
      address: address,
      gender: gender,
      shortbio: shortbio,
      longbio: longbio,
    };
    setEmpty();
    setLocalstorage(user);
  };

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content p-5">
            <div className="form-items">
              <h3>User Registration</h3>
              <p>Fill in the data below.</p>

              <form className="registration-form" onSubmit={handleSubmit}>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <div className="input-group date" id="datepicker">
                    <input
                      type="date"
                      className="form-control mt-3"
                      name="date"
                      style={{ color: "#000", fontWeight: "bold" }}
                      value={date}
                      onChange={(e) => setdate(e.target.value)}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <select
                    className="form-select mt-3"
                    style={{ color: "#000", fontWeight: "bold" }}
                    onChange={(e) => setgender(e.target.value)}
                    required
                  >
                    <option selected disabled value="">
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control mt-3"
                      rows="3"
                      placeholder="Write a short bio"
                      name="short_bio"
                      value={shortbio}
                      onChange={(e) => setshortbio(e.target.value)}
                      autoComplete="off"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control mt-3"
                      rows="3"
                      placeholder="Write a long bio"
                      name="long_bio"
                      value={longbio}
                      onChange={(e) => setlongbio(e.target.value)}
                      autoComplete="off"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-12">
                  {/* <select onChange={changeSelectOptionHandler}> */}
                  <select>
                    <option>Choose...</option>
                    <option>Jordan</option>
                    <option>Turkey</option>
                    <option>USA</option>
                  </select>
                </div>

                {/* <div className="col-md-12">
                  <select>
                    <option>Choose...</option>
                    {options}
                  </select>
                </div> */}

                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsForm;

// Contact Section
import { React, useEffect, useState } from "react";
import "./detailsForm.css";
import * as services from "../../services/dropdown";

function DetailsForm(props) {
  // let [id, setId] = useState(1);
  let [name, setname] = useState("");
  let [date, setdate] = useState("");
  let [address, setaddress] = useState("");
  let [gender, setgender] = useState("");
  let [shortbio, setshortbio] = useState("");
  let [longbio, setlongbio] = useState("");
  let [selected, setSelected] = useState("");
  let [college, setCollege] = useState("");
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  const [checked, setChecked] = useState(false);
  const [success_msg, setSuccessMsg] = useState("");

  // let [success_msg, setSuccessMsg] = useState("");

  let all_colleges = [];
  let options = null;

  // For retrieving colleges based on country selected
  const changeSelectOptionHandler = (event) => {
    services
      .getCollegesDropdown(event.target.value, "")
      .then((response) => {
        let res = response.data;
        res.map((result) => {
          all_colleges.push(result.name);
        });
        setSelected(all_colleges);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (selected) {
    options = selected.map((el, index) => (
      <option key={index} value={el}>
        {el}
      </option>
    ));
  }

  // For handling the checked values
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };

  // For handling input from "others" checkbox
  const handleInput = (e) => {
    const input_val = e.target.value;
    const { languages } = userinfo;
    setUserInfo({
      languages: [...languages, input_val],
      response: [...languages, input_val],
    });
  };

  const setEmpty = () => {
    setname("");
    setdate("");
    setaddress("");
    setgender("");
    setshortbio("");
    setlongbio("");
    setSelected("");
    setCollege("");
    setUserInfo({});
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
      date: date,
      address: address,
      gender: gender,
      shortbio: shortbio,
      longbio: longbio,
      college: college,
      userinfo: userinfo,
    };
    setEmpty();
    setLocalstorage(user);
  };

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content p-5">
            {!!success_msg ? (
              <div className="alert alert-success p-2 mb-5" role="alert">
                <h4 className="alert-heading mb-0">{success_msg}</h4>
              </div>
            ) : (
              ""
            )}
            <div className="form-items">
              <h3>User Registration</h3>
              <p>Fill in the data below.</p>

              <form className="registration-form" onSubmit={handleSubmit}>
                <div className="col-12">
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

                <div className="col-12">
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

                <div className="col-12">
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

                <div className="col-12">
                  <select
                    className="form-select mt-3"
                    style={{ color: "#000", fontWeight: "bold" }}
                    onChange={(e) => setgender(e.target.value)}
                    required
                  >
                    <option selected disabled value={""}>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>

                <div className="col-12">
                  <select onChange={changeSelectOptionHandler} required>
                    <option value={""}>Choose a Country</option>
                    <option>Jordan</option>
                    <option>Turkey</option>
                    <option>USA</option>
                    <option>United Kingdom</option>
                  </select>
                </div>

                <div className="col-12">
                  <select onChange={(e) => setCollege(e.target.value)} required>
                    <option value={""}>Choose a college</option>
                    {options}
                  </select>
                </div>

                <div className="col-12">
                  <h6 className="text-white mt-3">Hobbies</h6>
                  <div className="checkbox-group" required>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Reading"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" for="inlineCheckbox1">
                        Reading
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Gaming"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" for="inlineCheckbox1">
                        Gaming
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Travelling"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" for="inlineCheckbox1">
                        Travelling
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Drawing"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" for="inlineCheckbox1">
                        Drawing
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Other"
                        // onChange={handleChange}
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                      />
                      <label className="form-check-label" for="inlineCheckbox1">
                        Other
                      </label>
                      {checked ? (
                        <input
                          className="inputRequest formContentElement"
                          name="token"
                          type="text"
                          onChange={handleInput}
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-12">
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

                <div className="col-12">
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

                <div className="form-button mt-3 d-grid">
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

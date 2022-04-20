// Contact Section
import { React, useEffect, useState } from "react";
import "./detailsForm.css";
import * as services from "../../services/dropdown";
import axios from "axios";
import moment from "moment";

function DetailsForm(props) {
  const [data_x, setData_x] = useState([]);

  // For holding form data
  let [name, setname] = useState("");
  let [date, setdate] = useState("");
  let [address, setaddress] = useState("");
  let [gender, setgender] = useState("");
  let [shortbio, setshortbio] = useState("");
  let [longbio, setlongbio] = useState("");
  let [selected, setSelected] = useState("");
  let [country, setCountry] = useState("");
  let [college, setCollege] = useState("");

  const [checked, setChecked] = useState(false);
  const [otherStr, setStr] = useState("");

  const [hobbies, setHobbies] = useState([]);
  const [success_msg, setSuccessMsg] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const gender_option = ["Male", "Female", "Other"];
  const hobby_options = [
    "Reading",
    "Gaming",
    "Travelling",
    "Drawing",
    "Gardening",
    "Cycling",
  ];

  let all_colleges = [];
  let options = null;
  let country_options = [];
  let country_list = null;

  const styles = {
    error_msg: {
      opacity: "0.7",
    },
  };

  // creating list of countries
  const listCountry = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        let result = response.data;
        result.map((res) => {
          country_options.push(res.name.common);
        });
        setData_x(country_options);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (data_x) {
    country_list = data_x.map((ele, index) => (
      <option key={index} value={ele}>
        {ele}
      </option>
    ));
  }

  useEffect(() => listCountry(), []);

  // For retrieving colleges based on country selected
  const changeSelectOptionHandler = (e) => {
    setCountry(e.target.value);
    services
      .getCollegesDropdown(e.target.value, "")
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

  const handleHobbies = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobbies) => hobbies !== value));
    }
  };

  // For handling input from "others" checkbox
  const handleOthertextEvent = (event) => {
    setStr(event.target.value);
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
    setHobbies([]);
    setStr("");
    setChecked(false);
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
      setSuccessMsg("Your registration was successful!");
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
      country: country,
      college: college,
      hobbies: hobbies,
    };

    const validationErrors = formValidation(user);
    const noErrors = Object.keys(validationErrors).length === 0;
    setFormErrors(validationErrors);
    if (noErrors) {
      setEmpty();
      setLocalstorage(user);
    } else {
      console.log("errors try again");
    }
  };

  const formValidation = (values) => {
    const errors = {};

    // Name Validations
    if (!values.name) {
      errors.name = "Username is required";
    } else if (values.name.trim().length < 4) {
      errors.name = "Username too short!";
    } else if (values.name.trim().length > 15) {
      errors.name = "Username too long!";
    }

    // Date Validation
    if (!values.date) {
      errors.date = "Date of Birth is required";
    }

    // Address Validations
    if (!values.address) {
      errors.address = "Address is required";
    } else if (values.address.trim().length < 10) {
      errors.address = "Address too short!";
    } else if (values.address.trim().length > 25) {
      errors.address = "Address too long!";
    }

    // Gender Validation
    if (!values.gender) {
      errors.gender = "Select a gender";
    }

    // Country Validation
    if (!values.country) {
      errors.country = "Select a country";
    }

    // College Validation
    if (!values.college) {
      errors.college = "Select a college";
    }

    // Short Bio Validations
    if (!values.shortbio) {
      errors.shortbio = "Short bio required";
    } else if (values.shortbio.trim().length < 35) {
      errors.shortbio = "Bio too short!";
    } else if (values.shortbio.trim().length > 70) {
      errors.shortbio = "Bio too long!";
    }

    // Long Bio Validations
    if (!values.longbio) {
      errors.longbio = "Long bio required";
    } else if (values.longbio.trim().length < 50) {
      errors.longbio = "Bio too short!";
    } else if (values.longbio.trim().length > 100) {
      errors.longbio = "Bio too long!";
    }

    return errors;
  };

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              {!!success_msg ? (
                <div className="alert alert-success p-2 mb-5" role="alert">
                  <h4 className="alert-heading mb-0">{success_msg}</h4>
                </div>
              ) : (
                ""
              )}
              <h3>User Registration</h3>
              <p>Fill in the data below.</p>

              <form
                className="registration-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="col-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    autoComplete="off"
                    noValidate
                  />
                  {formErrors.name ? (
                    <div className="text-white" style={styles.error_msg}>
                      {formErrors.name}
                    </div>
                  ) : (
                    ""
                  )}
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
                      max={moment().format("YYYY-MM-DD")}
                      noValidate
                    />
                    {formErrors.date ? (
                      <div className="text-white" style={styles.error_msg}>
                        {formErrors.date}
                      </div>
                    ) : (
                      ""
                    )}
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
                    noValidate
                  />
                  {formErrors.address ? (
                    <div className="text-white" style={styles.error_msg}>
                      {formErrors.address}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-12">
                  <select
                    className="form-select mt-3"
                    style={{ color: "#000", fontWeight: "bold" }}
                    onChange={(e) => setgender(e.target.value)}
                    noValidate
                  >
                    <option selected disabled value={""}>
                      Gender
                    </option>
                    {gender_option.map((gen) => {
                      return <option value={gen}>{gen}</option>;
                    })}
                  </select>
                  {formErrors.gender ? (
                    <div className="text-white" style={styles.error_msg}>
                      {formErrors.gender}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-12">
                  <select
                    className="form-select"
                    onChange={changeSelectOptionHandler}
                    noValidate
                  >
                    <option selected disabled value={""}>
                      Choose a Country
                    </option>
                    {country_list}
                  </select>
                  {formErrors.country ? (
                    <div className="text-white" style={styles.error_msg}>
                      {formErrors.country}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-12">
                  <select
                    className="form-select"
                    onChange={(e) => setCollege(e.target.value)}
                    noValidate
                  >
                    <option selected disabled value={""}>
                      Choose a College
                    </option>
                    {options}
                  </select>
                  {formErrors.college ? (
                    <div className="text-white" style={styles.error_msg}>
                      {formErrors.college}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-12">
                  <h6 className="text-white mt-3">Hobbies</h6>
                  <div className="checkbox-group" noValidate>
                    {hobby_options.map((hobby) => {
                      return (
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="hobbies"
                            id="inlineCheckbox1"
                            value={hobby}
                            onChange={handleHobbies}
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox1"
                          >
                            {hobby}
                          </label>
                        </div>
                      );
                    })}

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Other"
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
                          onChange={handleOthertextEvent}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              var temp = hobbies;
                              temp.push(otherStr);
                            }
                          }}
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>

                    {formErrors.hobbies ? (
                      <div className="text-white" style={styles.error_msg}>
                        {formErrors.hobbies}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control mt-3 mb-0"
                      rows="2"
                      placeholder="Write a short bio"
                      name="short_bio"
                      value={shortbio}
                      onChange={(e) => setshortbio(e.target.value)}
                      autoComplete="off"
                      noValidate
                    ></textarea>
                    {formErrors.shortbio ? (
                      <div className="text-white mt-1" style={styles.error_msg}>
                        {formErrors.shortbio}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control mt-3 mb-0"
                      rows="3"
                      placeholder="Write a long bio"
                      name="long_bio"
                      value={longbio}
                      onChange={(e) => setlongbio(e.target.value)}
                      autoComplete="off"
                      noValidate
                    ></textarea>
                    {formErrors.longbio ? (
                      <div className="text-white mt-1" style={styles.error_msg}>
                        {formErrors.longbio}
                      </div>
                    ) : (
                      ""
                    )}
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

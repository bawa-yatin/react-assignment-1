// Project Section

import { React, useEffect, useState } from "react";
import * as services from "../../services";

function CollegeList(props) {
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  const [checked, setChecked] = useState(false);
  const [collegeList, setCollegeList] = useState([]);
  const [searchText, setSearch] = useState("");

  const callSearchCollege = () => {
    if (searchText) {
      services
        .getCountriesAPI(searchText, "")
        .then((response) => {
          setCollegeList(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleInput = (e) => {
    const input_val = e.target.value;
    console.log(input_val);
  };

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);

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

  return (
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="sports"
          id="inlineCheckbox1"
          value="Football"
          onChange={handleChange}
        />
        <label className="form-check-label" for="inlineCheckbox1">
          Football
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="sports"
          id="inlineCheckbox1"
          value="Basketball"
          onChange={handleChange}
        />
        <label className="form-check-label" for="inlineCheckbox1">
          Basketball
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="sports"
          id="inlineCheckbox1"
          value="Cricket"
          onChange={handleChange}
        />
        <label className="form-check-label" for="inlineCheckbox1">
          Cricket
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="sports"
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
            placeholder="token"
            onChange={handleInput}
          />
        ) : (
          <div></div>
        )}
      </div>

      <div className="form-floating mt-3 mb-3 text-center">
        <label htmlFor="exampleFormControlTextarea1">
          You're proficient in the following languages :{" "}
        </label>
        <textarea
          className="form-control text"
          name="response"
          value={userinfo.response}
          placeholder="The checkbox values will be displayed here "
          id="floatingTextarea2"
          style={{ height: "150px" }}
          onChange={handleChange}
        ></textarea>
      </div>

      <div style={{ padding: "30px 50px 0 50px" }}>
        <div className="clg-header">Country List</div>

        <div style={{ marginBottom: "40px" }}>
          <input
            type="text"
            label="Search Country"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            style={{ width: "500px" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                callSearchCollege();
              }
            }}
          />
        </div>

        {collegeList.length ? (
          console.log(collegeList)
        ) : (
          <h2>There is no colleges yet...!!!</h2>
        )}
      </div>
    </div>
  );
}

export default CollegeList;

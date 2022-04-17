// Project Section

import { React, useEffect, useState } from "react";
import * as services from "../../services";
import { TextField } from "@material-ui/core";
import CollegeTable from "./collegeTable";
import "./collegeSearch.css";

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
        .getCollegesAPI(searchText, "")
        .then((response) => {
          setCollegeList(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  // const handleInput = (e) => {
  //   const input_val = e.target.value;
  //   console.log(input_val);
  // };

  // const handleChange = (e) => {
  //   // Destructuring
  //   const { value, checked } = e.target;
  //   const { languages } = userinfo;

  //   console.log(`${value} is ${checked}`);

  //   // Case 1 : The user checks the box
  //   if (checked) {
  //     setUserInfo({
  //       languages: [...languages, value],
  //       response: [...languages, value],
  //     });
  //   }

  //   // Case 2  : The user unchecks the box
  //   else {
  //     setUserInfo({
  //       languages: languages.filter((e) => e !== value),
  //       response: languages.filter((e) => e !== value),
  //     });
  //   }
  // };

  return (
    // <div className="container-fluid">
    //   {/* <div className="form-check form-check-inline">
    //     <input
    //       className="form-check-input"
    //       type="checkbox"
    //       name="sports"
    //       id="inlineCheckbox1"
    //       value="Football"
    //       onChange={handleChange}
    //     />
    //     <label className="form-check-label" for="inlineCheckbox1">
    //       Football
    //     </label>
    //   </div>

    //   <div className="form-check form-check-inline">
    //     <input
    //       className="form-check-input"
    //       type="checkbox"
    //       name="sports"
    //       id="inlineCheckbox1"
    //       value="Basketball"
    //       onChange={handleChange}
    //     />
    //     <label className="form-check-label" for="inlineCheckbox1">
    //       Basketball
    //     </label>
    //   </div>

    //   <div className="form-check form-check-inline">
    //     <input
    //       className="form-check-input"
    //       type="checkbox"
    //       name="sports"
    //       id="inlineCheckbox1"
    //       value="Cricket"
    //       onChange={handleChange}
    //     />
    //     <label className="form-check-label" for="inlineCheckbox1">
    //       Cricket
    //     </label>
    //   </div>

    //   <div className="form-check form-check-inline">
    //     <input
    //       className="form-check-input"
    //       type="checkbox"
    //       name="sports"
    //       id="inlineCheckbox1"
    //       value="Other"
    //       onChange={() => setChecked(!checked)}
    //       checked={checked}
    //     />
    //     <label className="form-check-label" for="inlineCheckbox1">
    //       Other
    //     </label>
    //     {checked ? (
    //       <input
    //         className="inputRequest formContentElement"
    //         name="token"
    //         type="text"
    //         placeholder="token"
    //         onChange={handleInput}
    //       />
    //     ) : (
    //       <div></div>
    //     )}
    //   </div>

    //   <div className="form-floating mt-3 mb-3 text-center">
    //     <label htmlFor="exampleFormControlTextarea1">
    //       You're proficient in the following languages :{" "}
    //     </label>
    //     <textarea
    //       className="form-control text"
    //       name="response"
    //       value={userinfo.response}
    //       placeholder="The checkbox values will be displayed here "
    //       id="floatingTextarea2"
    //       style={{ height: "150px" }}
    //       onChange={handleChange}
    //     ></textarea>
    //   </div> */}

    //   <div className="row">
    //     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
    //       <div className="pt-5 px-3">
    //         <h3 className="text-start text-underline">
    //           <u>College List</u>
    //         </h3>
    //       </div>
    //     </div>

    //     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    //       <form>
    //         <div className="form-outline">
    //           <input type="text" id="form12" className="form-control" />
    //           <label className="form-label" for="form12">
    //             Example label
    //           </label>
    //         </div>
    //       </form>
    //     </div>
    //   </div>

    //   <div style={{ padding: "30px 50px 0 50px" }}>
    //     <div className="clg-header">Country List</div>

    //     <div style={{ marginBottom: "40px" }}>
    //       <input
    //         type="text"
    //         label="Search Country"
    //         onChange={(e) => {
    //           setSearch(e.target.value);
    //         }}
    //         style={{ width: "500px" }}
    //         onKeyDown={(e) => {
    //           if (e.key === "Enter") {
    //             callSearchCollege();
    //           }
    //         }}
    //       />
    //     </div>

    //     {collegeList.length ? (
    //       console.log(collegeList)
    //     ) : (
    //       <h2>There is no colleges yet...!!!</h2>
    //     )}
    //   </div>
    // </div>

    <div className="p-4 text-start bg-color">
      <div className="clg-header">College List</div>

      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <div style={{ marginBottom: "40px" }}>
            <TextField
              variant="standard"
              label="Search College"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  callSearchCollege();
                }
              }}
            />
          </div>
        </div>
        <div className="col-12">
          {collegeList.length ? (
            <CollegeTable collegeList={collegeList} />
          ) : (
            <h2>No colleges to display!!!</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollegeList;

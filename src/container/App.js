import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// Components
import Navbar from "../components/Navbar/navbar";
import DetailsForm from "../components/UserForm/detailsForm";
import UserList from "../components/UserList/userDetails";
import CollegeList from "../components/College/collegeSearch";
import CascadingDropdown from "../components/dropdown";
// import Footer from "../components/Footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <DetailsForm title="Registration" overlap_title="User Details" />
            }
          />
          <Route path="userlist" element={<UserList title="User Messages" />} />
          <Route path="colleges" element={<CollegeList />} />

          <Route path={"*"} element={<Navigate replace to={"/"} />} />
        </Routes>
        {/* <CascadingDropdown /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

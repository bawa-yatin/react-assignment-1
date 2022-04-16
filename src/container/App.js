import logo from "../logo.svg";
import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// Components
// import GetData from "../services";
import Navbar from "../components/Navbar/navbar";
import DetailsForm from "../components/UserForm/detailsForm";
import UserList from "../components/UserList/userDetails";
import CollegeList from "../components/College/collegeSearch";
import Footer from "../components/Footer/footer";
// import GetData from "../services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <GetData /> */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <DetailsForm title="Contact" overlap_title="Get in Touch" />
            }
          />
          <Route path="userlist" element={<UserList title="User Messages" />} />
          <Route path="colleges" element={<CollegeList />} />

          <Route path={"*"} element={<Navigate replace to={"/"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

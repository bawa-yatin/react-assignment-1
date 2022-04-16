import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./container/App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
reportWebVitals();

// Footer Section
import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <footer className="footer bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="copyright-text text-left h6 mx-0 my-2">
              Copyright &copy; 2022. All Right Reserved!
            </div>
          </div>
          <div className="col-12 p-0">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-dark icon-style"
                style={{ marginRight: "12px" }}
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="text-dark icon-style"
                style={{ marginRight: "12px" }}
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="text-dark icon-style"
                style={{ marginRight: "12px" }}
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-dark icon-style"
                style={{ marginRight: "12px" }}
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// Footer Section
import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <footer className="footer bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 box">
            <div className="copyright-text text-left h6">
              Copyright &copy; 2022. All Right Reserved!
            </div>
          </div>
          <div className="col-md-6 box">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="mx-2 text-dark icon-style"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="mx-2 text-dark icon-style"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="mx-2 text-dark icon-style"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="mx-2 text-dark icon-style"
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

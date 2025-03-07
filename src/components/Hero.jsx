import React from "react";
// import Button from "react-bootstrap/Button";
import Project from "./Project";
import Header from "../assets/images/header.jpg";

function Hero() {
  return (
    <header className="pt-5" id="header">
      <br></br>
      <div className="container py-md-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
            <h1>Welcome To</h1>
            <h3 className="text-secondary fw-bold lh-1">
              Gracy Peter Portfolio
            </h3>
            <h1 className="text-captalize text-start text-primary lh-1 mb-3">
              Java<br></br>Full Stack Developer
            </h1>

            {/* <div className="text-center mt-0">
              <Button
                className="text-center "
                variant="primary"
                size="md"
                onClick={() => alert("Button Clicked!")}
              >
                About
              </Button>
            </div> */}
            
            <Project />
          </div>

          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <img className="img-fluid w-75 rounded-circle shadow my-5" src={Header} alt="project1 img" />
          </div>
        </div>
      </div>
 
      <br></br>
    </header>
  );
}

export default Hero;

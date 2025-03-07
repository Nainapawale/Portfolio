import React from "react";
import AboutImg from "../assets/images/about.jpg";
import Project from "./Project";

function About() {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
          <img
            className="img-fluid w-75 shadow "
            src={AboutImg}
            alt="about img"
          />
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mb-5">About Me</h2>
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <p className="text-start mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <Project/>
        </div>
      </div>
    </div>
  );
}

export default About;

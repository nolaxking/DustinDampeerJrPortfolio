import React from "react";
import PicOfMe from "../img/IMG_0119.png";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={PicOfMe} alt="" />
          </div>
          <div className="col">
            <h1></h1>
          </div>
        </div>
      </div>
    </>
  );
}

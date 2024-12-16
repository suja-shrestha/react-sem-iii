import React from "react";
import "./left-image.css";

const left_img = (props) => {
  return (
    <>
      <div className="main1">
        <h1>{props.services}</h1>
        <div className="container">
          <div className="left1">
            <h1>{props.title}</h1>
            <p>
             
             {props.description}
            </p>
          </div>
          <div className="right1">
            <img src={props.image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default left_img;

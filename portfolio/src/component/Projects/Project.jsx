import React from "react";
import "./project.css";
import Nav from "../nav/nav";
const Project = () => {
  return (
    <>
      <Nav />
      <div className="container1">
        <h1
          style={{
            marginTop: "10%",
            textAlign: "center",
            fontSize: "60px",
          }}
        >
          My Projects
        </h1>
        <p style={{textAlign:"center", paddingTop:"20px", fontSize:"20px"}}>Here are some of my projects</p>
        <div className="boxs">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
      </div>
    </>
  );
};

export default Project;

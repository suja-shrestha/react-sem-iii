import React from "react";
import "./project.css";
import Nav from "../nav/nav";
import comming from '../../assets/comming.jpg'
import Screenshot1 from '../../assets/Screenshot1.png'
import Screenshot2 from '../../assets/Screenshot2.png'
import Screenshot3 from '../../assets/Screenshot3.png'
import Screenshot4 from '../../assets/Screenshot4.png'

const Project = () => {
  return (
    <>
      <Nav />
      <div className="container1">
        <h1
          style={{
            marginTop: "7%",
            textAlign: "center",
            fontSize: "60px",
          }}
        >
          My Projects
        </h1>
        <p
          style={{ textAlign: "center", paddingTop: "20px", fontSize: "20px" }}
        >
          Here are some of my projects
        </p>
        <div className="boxs">
          <div className="box">
            <img src={Screenshot1} alt="" /><p>lorem10</p>
          </div>
          <div className="box">
            <img src={Screenshot2} alt="" /><p>lorem10</p>
          </div>
          <div className="box">
            <img src={Screenshot3} alt="" /><p>lorem10</p>
          </div>
          <div className="box">
            <img src={Screenshot4} alt="" /><p>lorem10</p>
          </div>
          <div className="box">
            <img src={comming} alt="" /><p>lorem10</p>
          </div>
          <div className="box">
          <img src={comming} alt="" /><p>lorem10</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Project;

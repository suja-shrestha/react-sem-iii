import React from "react";
import Nav from "../nav/nav";
import "./hero.css";
import background from "../../assets/background.png";
import { TypeAnimation } from "react-type-animation";
import Foot from "../footer/foot";
const Hero = () => {
  return (
    <>
      <Nav />
      <div className="container1">
        <div className="hero-paragraphs">
          <div className="left-paragraph">
            <div className="type">
            <h1 className="text-danger">
              <TypeAnimation
                sequence={[
                  "Hello Everyone !",
                  500,
                 
                ]}
                wrapper="span"
                cursor={true}
                repeat={null}
              />

            </h1>
            </div>

            <p>
           I am Front-End Developer passionate about building responsive and user-friendly web interfaces. Skilled in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React. Dedicated to crafting seamless user experiences and visually appealing designs.
            </p>

            <button className="white">View My Resume</button>
            <button className="black">Explore Projects</button>
          </div>
          <div className="right-paragraph">
            <div className="rotate">
              <div className="rotate1">
            <img src={background} alt="" />
            </div>
            </div>
          </div>
        </div>
        <Foot/>
      </div>
    </>
  );
};

export default Hero;

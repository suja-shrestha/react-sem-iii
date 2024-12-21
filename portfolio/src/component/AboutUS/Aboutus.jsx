import React from 'react';
import './Aboutus.css'; // Ensure you have a CSS file for styling
import Nav from '../nav/Nav'
import js from '../../assets/js.png'
import css from '../../assets/css.png'
import java from '../../assets/java.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'

const Aboutus = () => {
  return (
    <>
     <Nav/>
    <section className="aboutus-section">
     
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="aboutus-content">
          <p>
            Hello! I’m Sujal Shrestha, a passionate web developer and graphic designer dedicated to crafting 
            visually stunning and highly functional digital experiences. With a strong foundation in both creative 
            design and technical development, I bring a unique perspective to every project I undertake.
          </p>
          <p>
            My journey in web development began with personal projects, where I honed my skills in HTML, CSS, 
            JavaScript, and React. Over time, I’ve expanded my expertise to include responsive design, dynamic 
            user interfaces, and performance optimization. When I’m not coding, I immerse myself in graphic design, 
            blending artistic creativity with user-centered design principles.
          </p>
          <p>
            Whether you need a modern e-commerce platform, a visually engaging NGO website, or a dynamic 
            travel and tours application, I’m here to bring your ideas to life. Let’s work together to create something amazing!
          </p>
        </div>
        <div className="contact-info">
        <div className="boxes">
<div className="box1"><img src={html} alt="" /></div>
<div className="box1"><img src={css} alt="" /></div>
<div className="box1"><img src={js} alt="" /></div>
<div className="box1"><img src={react} alt="" /></div>
<div className="box1"><img src={python} alt="" /></div>
<div className="box1"><img src={java} alt="" /></div>
        </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Aboutus;

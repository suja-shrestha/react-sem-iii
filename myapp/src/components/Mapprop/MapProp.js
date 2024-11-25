import React from "react";
import "./prop2.css";
const MapProp = (props) => {
  return (
      <div className="div2">
        <h1>{props.sujal}</h1>
        <p>{props.texts}</p>
        <h2>{props.text1}</h2>
        <h2>{props.text2}</h2>
      </div>
  );
};

export default MapProp;

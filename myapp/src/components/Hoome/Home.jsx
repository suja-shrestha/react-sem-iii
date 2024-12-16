import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import mental from "../../assets/mental.png";
import Left_img from "../Content/left_img";

const Home = () => {
  return (
    <div className="main">
      <Nav />
      <div className="contaner">
        <div className="left">
          <h1>Your Health Is Our Responisibility</h1>
          <p>
            Explore the fascinating world of psychology with us! Our website
            offers insights into mental health, emotional well-being, and
            personal development. Join us on a journey of self-discovery and
            learn how to cultivate a happier, healthier mind.
          </p>

          <button>Learn More</button>
          <div className="box1">
            <div>
              {" "}
              <h1>
                100<sup> +</sup>
              </h1>
              <p>Doctors</p>
            </div>
            <div>
              {" "}
              <h1>
                165<sup> +</sup>
              </h1>
              <p>Treatments</p>
            </div>
            <div>
              <h1>
                1M<sup> +</sup>
              </h1>
              <p>Reviews</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={mental} alt="" />
        </div>
      </div>
      <Left_img
        services="Family Psychology"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab praesentium laudantium, repellendus quidem voluptas odio aliquid dolore enim qui aut sint quas, sit temporibus laboriosam nostrum veritatis? Quisquam odit, iste earum natus ipsa minima eius in aliquid at facere eligendi vitae? Suscipit quaerat nam voluptas laudantium ratione ut iusto tempore?
"
        image={mental}
      />
    </div>
  );
};

export default Home;

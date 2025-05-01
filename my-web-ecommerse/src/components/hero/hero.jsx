import "./hero.css";
import bulb from "..//../assets/bulb.png";
import Tauko from "../header/navbar";
import Khuta from "../footer/footer";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <Tauko />
      <div className="container1">
        <div className="hero-paragraphs">
          <div className="left-paragraph">
            <h1 className="text-danger">
              <TypeAnimation
                sequence={[
                  "Welcome to Your Ultimate Shopping Destination!",
                  1000,
                  "You Can Find Anything You Want Here",
                  1000,
                  "We Are What You Want",
                  1000,

                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div className="right-paragraph">
            <p>
              Discover an extensive range of products crafted to meet all your
              needs and preferences. Our selection combines quality,
              affordability, and convenience, ensuring you find exactly what
              you’re looking for. Whether you're seeking everyday essentials or
              unique items, we have something for everyone!
            </p>
            <button className="white">Sign Up for Discount</button>
            <button className="black">Explore Our Collections</button>
          </div>
        </div>
        <div className="numbers">
          <ul>
            <li>
              <h1>
                340<sub>+</sub>
              </h1>
              <p>100% Satisfaction Guaranteed</p>
            </li>
            <li>
              <h1>
                65<sub>+</sub>
              </h1>
              <p>25,000+ Happy Customers</p>
            </li>
            <li>
              <h1>
                80<sub>+</sub>
              </h1>
              <p>50+ Unique Categories</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container2">
        <div className="discover">
          <p className="text-center">Empowering E-Commerce Success</p>
          <h3 className="text-bold text-center">
            Discover the Power of Our E-Commerce Solutions!
          </h3>
          <div className="box">
            <ul>
              <li>
                <h5>15K+</h5>
                <p>
                  Over 50,000 <br />
                  satisfied customers
                </p>
              </li>
              <li>
                <h5>20K+</h5>
                <p>
                  Boosted sales <br /> by 30,000+
                </p>
              </li>
              <li>
                <h5>99%</h5>
                <p>
                  Achieved 95% <br /> customer satisfaction
                </p>
              </li>
              <li>
                <h5>100M</h5>
                <p>
                  Generated over <br /> $10 million in sales
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="journey">
        <div className="left1">
          <h5>Start Your E-Commerce Journey Today!</h5>
          <p>
            Join thousands of satisfied customers and elevate your online
            shopping experience with our cutting-edge e-commerce platform.
            Discover features that put you in control and make shopping a
            breeze!
          </p>
          <button>Get Started Now!</button>
        </div>
        <div className="right1">
          <img src={bulb} alt="image" srcset="" />
        </div>
      </div>
      <div className="discover">
        <p>Discover Unique Products Just for You!</p>
        <h5>Explore Our Diverse Range of Categories</h5>
        <div className="explore-image">
          <div className="discover-left">
            <img
              src="https://images.pexels.com/photos/3801347/pexels-photo-3801347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div className="discover-right">
            <div className="category">
              <img
                src="https://img.freepik.com/free-photo/american-men-playing-urban-basketball-long-shot_23-2148264747.jpg?t=st=1727848838~exp=1727852438~hmac=af7c9ee6e1389a80a53a1c5efb40769b9cb1f1c67a3dd14f914657ab8cc4f92f&w=740"
                alt=""
              />
              <p className="pt-2">Sports & Outdoors</p>
              <p>Gear Up for Adventure</p>
            </div>
            <div className="category">
              <img
                src="https://img.freepik.com/free-photo/playing-toys-concept-with-wooden-cubes-kid-toys-wooden-background-flat-lay_176474-7843.jpg?t=st=1727848927~exp=1727852527~hmac=d816a95e66f2f41a7dc7025b2e5d3827f9968ea6bb670c396cfc5e261be1a9f2&w=740"
                alt=""
              />
              <p className="pt-2">Toys & Games</p>
              <p>Fun for All Ages</p>
            </div>
          </div>
        </div>
      </div>
      <div className="discover">
        <p>Quality You Can Trust, Prices You'll Love!</p>
        <h5>Shop the Best Categories for Every Need</h5>
        <div className="explore-image">
          <div className="discover-left">
            <img
              src="https://images.pexels.com/photos/3801347/pexels-photo-3801347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div className="discover-right">
            <div className="category">
              <img
                src="https://img.freepik.com/free-photo/spa-composition-with-air-humidifier-aroma-oils_169016-58460.jpg?t=st=1727848650~exp=1727852250~hmac=5ca67c2feb895de7a9dacffcaeb54d7cec02c0e432e837d2c9897779d1bd206a&w=740"
                alt=""
              />
              <p className="pt-2">Home Essentials</p>
              <p>Quality Goods for Every Room</p>
            </div>
            <div className="category">
              <img
                src="https://img.freepik.com/free-photo/laptop_23-2148155464.jpg?t=st=1727848598~exp=1727852198~hmac=ec7c1b5544118b493c56de40e24efaa6f71d03f1f1d4f2f84e083bfa865974fd&w=740"
                alt=""
              />
              <p className="pt-2">Gadgets & Tech</p>
              <p>Quality Goods for Every Room</p>
            </div>
          </div>
        </div>
      </div>
      <div className="innovation mt-4">
        <div className="texts">
          <p>Elevate Your Shopping</p>
          <h5>Innovative Features for Success</h5>
        </div>
        <div className="four-box mt-5">
          <div>
            <div className="boxs">
              <div className="d-flex pt-2 ">
                <i class="bi bi-balloon-fill px-2  "></i>
                <p style={{ fontWeight: "bold" }} className="pt-2">
                  User-Friendly
                </p>
              </div>
              <p>
                Enjoy peace of mind with our advanced security protocols for
                online transactions.
              </p>
              <a href=""> Discover More Features</a>
            </div>
            <div className="boxs">
              <div className="d-flex pt-2 ">
                <i class="bi bi-stars px-2"></i>
                <p style={{ fontWeight: "bold" }} className="pt-2">
                  Secure Payments
                </p>
              </div>
              <p>
                Our website is designed with user experience in mind, making
                navigation seamless and enjoyable.
              </p>
              <a href="">Explore Mobile Features </a>
            </div>
          </div>
          <div>
            <div className="boxs">
              <div className="d-flex pt-2 ">
                <i class="bi bi-file-lock2 px-2"></i>
                <p style={{ fontWeight: "bold" }} className="pt-2">
                  Mobile Optimized
                </p>
              </div>
              <p>
                Shop on the go with our fully responsive design that looks great
                on any device.
              </p>
              <a href=""> Learn About Security</a>
            </div>
            <div className="boxs">
              <div className="d-flex pt-2 ">
                <i class="bi bi-heart-fill px-2"></i>
                <p style={{ fontWeight: "bold" }} className="pt-2">
                  Analytics Tool
                </p>
              </div>
              <p>
                Gain insights into customer behavior with powerful analytics
                tools integrated into our platform.
              </p>
              <a href=""> Analyze Your Data</a>
            </div>
          </div>
        </div>
        <div className="review">
          <h5>What Our Customers Are Saying!</h5>
          <div className="d-flex">
            <div className="review-box">
              <div>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                Fantastic Experience! I recently purchased a laptop from this
                site, and I couldn't be happier! The delivery was prompt, and
                the product exceeded my expectations. The description was
                accurate, and the customer service was outstanding. I will
                definitely shop here again!
              </p>
              <h1>Slack</h1>
            </div>
            <div className="review-box mb-5">
              <div>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                Highly Recommend! I bought a dress for my sister's wedding, and
                it was stunning! The quality was top-notch, and it fit
                perfectly. The checkout process was seamless, and I received my
                order in no time. I am recommending this site to all my friends!
              </p>
              <h1>Stripe</h1>
            </div>
          </div>
        </div>
        <div className="texts  ">
          <p>Empower Your Business</p>
          <h5>Essential Features for Growth</h5>
        </div>
        <div className="four-box mt-5">
          <div>
            <div className="boxs">
              <div className="d-flex pt-2 ">
                <i class="bi bi-balloon-fill px-2  "></i>
                <p style={{ fontWeight: "bold" }} className="pt-2  ">
                  Customizable Design
                </p>
              </div>
              <p>
                Create a unique shopping experience that reflects your brand
                identity with our customizable templates.
              </p>
              <a href=""> Customize Your Store</a>
            </div>
            <div className="boxs">
              <div className="d-flex pt-2 ">
                <i class="bi bi-stars px-2"></i>
                <p style={{ fontWeight: "bold" }} className="pt-2">
                  SEO Friendly
                </p>
              </div>
              <p>
                Boost your visibility on search engines with our built-in SEO
                features that enhance your site's ranking.
              </p>
              <a href="">Improve Your SEO</a>
            </div>
          </div>
          <div>
            <div className="boxs">
              <div className="d-flex pt-2 ">
                <i class="bi bi-file-lock2 px-2"></i>
                <p style={{ fontWeight: "bold" }} className="pt-2">
                  24/7 Support
                </p>
              </div>
              <p>
                Our dedicated support team is available around the clock to
                assist you with any queries or issues.
              </p>
              <a href=""> Contact Support Anytime</a>
            </div>
            <div className="boxs">
              <div className="d-flex pt-2 ">
                <i class="bi bi-heart-fill px-2"></i>
                <p style={{ fontWeight: "bold" }} className="pt-2 ">
                  Inventory Managemently
                </p>
              </div>
              <p>
                Effortlessly manage your stock levels and streamline order
                fulfillment with our comprehensive inventory tools.
              </p>
              <a href=""> Manage Inventory Efficiently</a>
            </div>
          </div>
        </div>
      </div>

      <div className="your-questions">
        <div className="text">
          <h2>Your Questions Answered</h2>
          <p>We’re here to help!</p>
        </div>
        <div className="questions">
          <div className="six">
            <p>What payment methods do you accept?</p>
          </div>
          <div className="six">
            <p>How can I track my order?</p>
            <p>
              You can track your order using the tracking link provided in your
              confirmation email. Simply click the link, and you'll be directed
              to the tracking information directly on our website, where you can
              see the status of your shipment in real-time.
            </p>
          </div>
          <div className="six">
            <p>Do you offer international shipping?</p>
            <p>
              Yes, we proudly offer international shipping to a variety of
              countries. Please check our shipping policy for more details
              regarding shipping rates and delivery times to your location.
            </p>
          </div>
          <div className="six">
            <p>What is your return policy?</p>
            <p>
              We have a hassle-free return policy that allows you to return
              items within 30 days of purchase. Items must be in their original
              condition, and you can initiate the return process through our
              website.
            </p>
          </div>
          <div className="six">
            <p>How can I contact customer support?</p>
            <p>
              You can reach our customer support team via the contact form on
              our website, or you can email us directly at
              support@ecommercewebsite.com. We're here to assist you with any
              queries you may have.
            </p>
          </div>
          <div className="six">
            <p>Do you have a loyalty program?</p>
            <p>
              Absolutely! Our loyalty program rewards you for every purchase you
              make. Sign up now to start earning points that can be redeemed for
              discounts on future orders.
            </p>
          </div>
        </div>
      </div>
      <div className="sign-up">
        <div className="left2">
          <img
            src="https://img.freepik.com/free-vector/flat-join-us-concept-promo_23-2148936476.jpg?t=st=1728916127~exp=1728919727~hmac=90e9fee72612f94b18b474fde580c347cc5373490b1baaa22bc26feb728ce50d&w=1380"
            alt=""
            srcset=""
          />
        </div>
        <div className="right2">
          <div className="sign">
            <h3 style={{ fontWeight: "bold" }}>
              Unlock Your Shopping Potential!
            </h3>
            <p className="pt-2">
              Sign in to explore an extensive range of products designed to meet
              your needs. Enjoy personalized recommendations and exclusive deals
              tailored just for you!
            </p>
            <input
              style={{
                borderRadius: "5px",
                padding: "5px",
                marginTop: "20px",
                width: "98%",
              }}
              type="email"
              placeholder=" Sign-in with email"
              required
            />
            <br />
            <button
              style={{
                background: "blue",
                borderRadius: "10px",
                width: "150px",
                color: "white",
              }}
              className="mt-3 p-1"
            >
              Join us today
            </button>
            <a href="">
              {" "}
              <p style={{ paddingTop: "20px", fontSize: "14px" }}>
                {" "}
                Read Our Privacy Policy Here!
              </p>
            </a>
          </div>
        </div>
      </div>

      <Khuta />
    </>
  );
}

export default Hero;

import './hero.css';
import bulb from '..//../assets/bulb.png'

function Hero() {
    return (
        <>
            <div className="container1">
                <div className="hero-paragraphs">
                    <div className="left-paragraph">
                        <h1 className='text-danger'>Welcome to Your Ultimate Shopping Destination!</h1>
                    </div>
                    <div className="right-paragraph">
                        <p>Discover an extensive range of products crafted to meet all your needs and preferences. Our selection combines quality, affordability, and convenience, ensuring you find exactly what you’re looking for. Whether you're seeking everyday essentials or unique items, we have something for everyone!</p>
                        <button className='white'>Sign Up for Discount</button>
                        <button className='black'>Explore Our Collections</button>
                    </div>
                </div>
                <div className="numbers">
                    <ul>
                        <li>
                            <h1>340<sub>+</sub></h1>
                            <p>100% Satisfaction Guaranteed</p>
                        </li>
                        <li>
                            <h1>65<sub>+</sub></h1>
                            <p>25,000+ Happy Customers</p>
                        </li>
                        <li>
                            <h1>80<sub>+</sub></h1>
                            <p>50+ Unique Categories</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container2'>
                <div className='discover'>
                    <p className='text-center'>Empowering E-Commerce Success</p>
                    <h3 className='text-bold text-center'>Discover the Power of Our E-Commerce Solutions!</h3>
                    <div className='box'>
                        <ul>
                            <li><h5>15K+</h5><p>Over 50,000 <br />satisfied customers</p></li>
                            <li><h5>20K+</h5><p>Boosted sales <br /> by 30,000+</p></li>
                            <li><h5>99%</h5><p>Achieved 95% <br /> customer satisfaction</p></li>
                            <li><h5>100M</h5><p>Generated over <br /> $10 million in sales</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='journey'>
                <div className="left1">
                    <h5>Start Your E-Commerce Journey Today!</h5>
                    <p>Join thousands of satisfied customers and elevate your online shopping experience with our cutting-edge e-commerce platform. Discover features that put you in control and make shopping a breeze!</p>
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
                        <img src="https://img.freepik.com/premium-photo/valentines-day-background-valentines-day-card-with-roses-gifts-wooden-board_1112-2608.jpg?w=740" alt="" />
                    </div>
                    <div className="discover-right">
                        <div className="category">
                            <img src="https://img.freepik.com/free-photo/american-men-playing-urban-basketball-long-shot_23-2148264747.jpg?t=st=1727848838~exp=1727852438~hmac=af7c9ee6e1389a80a53a1c5efb40769b9cb1f1c67a3dd14f914657ab8cc4f92f&w=740" alt="" />
                            <p className='pt-2'>Sports & Outdoors</p>
                            <p>Gear Up for Adventure</p>
                        </div>
                        <div className="category">
                            <img src="https://img.freepik.com/free-photo/playing-toys-concept-with-wooden-cubes-kid-toys-wooden-background-flat-lay_176474-7843.jpg?t=st=1727848927~exp=1727852527~hmac=d816a95e66f2f41a7dc7025b2e5d3827f9968ea6bb670c396cfc5e261be1a9f2&w=740" alt="" />
                            <p className='pt-2' >Toys & Games</p>
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
                        <img src="https://img.freepik.com/premium-photo/woman-wearing-scarf-that-says-word-it_949828-15372.jpg?w=740" alt="" />
                    </div>
                    <div className="discover-right">
                        <div className="category">
                            <img src="https://img.freepik.com/free-photo/spa-composition-with-air-humidifier-aroma-oils_169016-58460.jpg?t=st=1727848650~exp=1727852250~hmac=5ca67c2feb895de7a9dacffcaeb54d7cec02c0e432e837d2c9897779d1bd206a&w=740" alt="" />
                            <p className='pt-2'>Home Essentials</p>
                            <p>Quality Goods for Every Room</p>
                        </div>
                        <div className="category">
                            <img src="https://img.freepik.com/free-photo/laptop_23-2148155464.jpg?t=st=1727848598~exp=1727852198~hmac=ec7c1b5544118b493c56de40e24efaa6f71d03f1f1d4f2f84e083bfa865974fd&w=740" alt="" />
                            <p className='pt-2' >Gadgets & Tech</p>
                            <p>Quality Goods for Every Room</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="innovation">
                <div className='texts'>
                    <p >Elevate Your Shopping</p>
                    <h5>Innovative Features for Success</h5>
                </div>
                <div className='four-box'>
                    <div>
                        <div className="boxs"></div>
                        <div className="boxs"></div>
                    </div>
                    <div>
                        <div className="boxs"></div>
                        <div className="boxs"></div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Hero;

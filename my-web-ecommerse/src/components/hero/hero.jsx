import './hero.css';
import bulb from '..//../assets/bulb.png'

function Hero() {
    return (
        <>
            <div className="container1">
                <div className="hero-paragraphs">
                    <div className="left-paragraph">
                        <h1>Welcome to Your Ultimate Shopping Destination!</h1>
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
                    <button>Get Started Now</button>
                </div>
                <div className="right1">
                    <img src={bulb} alt="image" srcset="" />
                </div>
            </div>
        </>
    );
}

export default Hero;

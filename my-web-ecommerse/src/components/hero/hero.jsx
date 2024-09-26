import './hero.css';

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
            <h1>78</h1>
        </div>
        </>
    );
}

export default Hero;

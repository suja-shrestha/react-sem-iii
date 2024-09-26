import './navbar.css';
import logo from "../../assets/logo.png";

function Tauko() {
    return (
        <>
            <div className="head">
                <div className="nav">
                    <ul className='left'>
                        <li><img src={logo} alt="Kaneki Logo" /></li>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                    </ul>
                    <ul className='right'>
                        <li><i className="bi bi-facebook fs-4" style={{ color: 'blue' }}></i></li>
                        <li><i className="bi bi-pinterest fs-4" style={{ color: "red" }}></i></li>
                        <li><i className="bi bi-instagram fs-4" style={{ color: "pink" }}></i></li>
                        <li><i className="bi bi-linkedin fs-4" style={{ color: "blue" }}></i></li>
                        <li><button>Start Shopping now <i className="bi bi-arrow-right fs-5"></i></button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Tauko;

import './footer.css'
import React from 'react';
import Tauko from '../header/navbar';
function Khuta() {
    return (
        <>
 
            <div class="footer">
                <div class="grid-item">
                    <p>Features</p>
                    <ul>
                        <li>Secure Payment Options</li>
                        <li>Fast Shipping Worldwide</li>
                        <li>24/7 Customer Support</li>
                        <li>Easy Returns & Exchanges</li>
                        <li>Exclusive Member Discounts</li>
                        
                    </ul>
                </div>
                <div class="grid-item">
                    <p>Featured Products</p>
                    <ul>
                        <li>Stylish Apparel</li>
                        <li>Latest Electronics</li>
                        <li>Home Essentials</li>
                        <li>Health & Beauty</li>
                        <li>Sports Equipment</li>
                    </ul>
                </div>
                <div class="grid-item">
                    <p>About Us</p>
                    <ul>
                        <li>Our Mission</li>
                        <li>Our Values</li>
                        <li>Sustainability Efforts</li>
                        <li>Meet the Team</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div class="grid-item">
                    <p>Follow Us</p>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Pinterest</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <div className="end">
    <i className="bi bi-globe-europe-africa"></i>
    <p>Your E-Commerce Partner</p>
</div>


        </>
    )
}
export default Khuta;
import React, { useState } from 'react';
import Tauko from '../header/navbar';  // Assuming Tauko is your navbar component
import './shop.css';

// Men, Women, and Children data with unique IDs
const menData = [
  { id: 1, name: "Men's T-Shirt", price: "$19.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 2, name: "Men's Jeans", price: "$29.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 3, name: "Men's Sneakers", price: "$49.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 4, name: "Men's Jacket", price: "$59.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 5, name: "Men's Jeans", price: "$29.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 6, name: "Men's Sneakers", price: "$49.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 7, name: "Men's Jacket", price: "$59.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 8, name: "Men's Jeans", price: "$29.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 9, name: "Men's Sneakers", price: "$49.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 10, name: "Men's Jacket", price: "$59.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 11, name: "Men's T-Shirt", price: "$19.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 12, name: "Men's Jeans", price: "$29.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 13, name: "Men's Sneakers", price: "$49.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 14, name: "Men's Jacket", price: "$59.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 15, name: "Men's Jeans", price: "$29.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 16, name: "Men's Sneakers", price: "$49.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 17, name: "Men's Jacket", price: "$59.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 18, name: "Men's Jeans", price: "$29.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 19, name: "Men's Sneakers", price: "$49.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 20, name: "Men's Jacket", price: "$59.99", image: "https://www.bing.com/th/id/OIP.an32vnClA-tirKBwoUYMDwHaG6?w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" }
];

const womenData = [
  { id: 1, name: "Women's Dress", price: "$39.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 2, name: "Women's Hat", price: "$14.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 3, name: "Women's Sandals", price: "$24.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 4, name: "Women's Dress", price: "$39.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 5, name: "Women's Hat", price: "$14.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 6, name: "Women's Sandals", price: "$24.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 7, name: "Women's Dress", price: "$39.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 8, name: "Women's Hat", price: "$14.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 9, name: "Women's Sandals", price: "$24.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 10, name: "Women's Dress", price: "$39.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 11, name: "Women's Hat", price: "$14.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 12, name: "Women's Sandals", price: "$24.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 13, name: "Women's Dress", price: "$39.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 14, name: "Women's Hat", price: "$14.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 15, name: "Women's Sandals", price: "$24.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 16, name: "Women's Dress", price: "$39.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 17, name: "Women's Hat", price: "$14.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 18, name: "Women's Sandals", price: "$24.99", image: "https://www.bing.com/th/id/OIP.FP3kMPhKZkE47VlSya9jYwHaHa?w=194&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  
];

const childrenData = [
  { id: 1, name: "Children's T-Shirt", price: "$12.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 2, name: "Children's Shorts", price: "$18.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 3, name: "Children's Toy", price: "$8.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 4, name: "Children's T-Shirt", price: "$12.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 5, name: "Children's Shorts", price: "$18.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 6, name: "Children's Toy", price: "$8.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 7, name: "Children's T-Shirt", price: "$12.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 8, name: "Children's Shorts", price: "$18.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 9, name: "Children's Toy", price: "$8.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 10, name: "Children's T-Shirt", price: "$12.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 11, name: "Children's Shorts", price: "$18.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 12, name: "Children's Toy", price: "$8.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 13, name: "Children's T-Shirt", price: "$12.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 14, name: "Children's Shorts", price: "$18.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 15, name: "Children's Toy", price: "$8.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 16, name: "Children's T-Shirt", price: "$12.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 17, name: "Children's Shorts", price: "$18.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 18, name: "Children's Toy", price: "$8.99", image: "https://www.bing.com/th/id/OIP.FXkc6YQHOEHXvuViRMjJqQHaHa?w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter products based on the search term
  const filterProducts = (data) => {
    return data.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <>
      <Tauko />
      <div className="sections">
        <div className="semi">
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Men's Section */}
          <h2>Men's Products</h2>

          <div className="section1">
            {filterProducts(menData).length > 0 ? (
              filterProducts(menData).map((product) => (
                <div className="box1" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button>Buy Now</button>
                </div>
              ))
            ) : (
              <p className="no-results">No products found in Men's section.</p>
            )}
          </div>

          {/* Women's Section */}
          <h2>Women's Products</h2>

          <div className="section2">
            {filterProducts(womenData).length > 0 ? (
              filterProducts(womenData).map((product) => (
                <div className="box1" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button>Buy Now</button>
                </div>
              ))
            ) : (
              <p className="no-results">No products found in Women's section.</p>
            )}
          </div>

          {/* Children's Section */}
          <h2>Children's Products</h2>

          <div className="section3">
            {filterProducts(childrenData).length > 0 ? (
              filterProducts(childrenData).map((product) => (
                <div className="box1" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button>Buy Now</button>
                </div>
              ))
            ) : (
              <p className="no-results">No products found in Children's section.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

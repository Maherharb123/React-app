import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your API call to fetch products
    setProducts([
      { id: 1, name: 'Product 1', price: 29.99, image: '/images/pic1.jpg' },
      { id: 2, name: 'Product 2', price: 49.99, image: '/images/pic2.jpg' },
     
    ]);
  }, []);

  return (
    <div>
      <h2>Our Products</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Link to={`/details/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

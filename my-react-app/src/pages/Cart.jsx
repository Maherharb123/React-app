import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);
  }, []);

  const getCartProductDetails = (id) => {
    // Replace with API call to fetch product details by id
    return { name: `Product ${id}`, price: 29.99, image: `/images/product${id}.jpg` };
  };

  const uniqueCartItems = [...new Set(cartItems)];
  const cartProductDetails = uniqueCartItems.map(id => getCartProductDetails(id));

  const subtotal = cartProductDetails.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        {cartProductDetails.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            {/* Quantity management can be added here */}
          </div>
        ))}
      </div>
      <p>Subtotal: ${subtotal}</p>
      <Link to="/">Continue shopping</Link>
      <Link to="/checkout">Complete purchase</Link>
    </div>
  );
}

export default Cart;

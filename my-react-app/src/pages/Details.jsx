import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Details() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Replace with your API call to fetch product details
    setProduct({
      id: productId,
      name: `Product ${productId}`,
      price: 29.99,
      description: 'This is a great product!',
      image: `/images/product${productId}.jpg`,
    });
  }, [productId]);

  const addToCart = (id) => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    currentCart.push(id);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <div>
      {product && (
        <>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          <button onClick={() => navigate('/')}>Go Back</button>
        </>
      )}
    </div>
  );
}

export default Details;

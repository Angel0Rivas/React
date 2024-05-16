import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductCard;

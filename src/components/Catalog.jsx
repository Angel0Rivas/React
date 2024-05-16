import React from 'react';
import ProductCard from './ProductCard'; 
import Image from '../img/Windows10.png';

const products = [
  {
    title: 'Windows 10',
    imageUrl: <Image />,
    price: "15$",
  },
];

function Catalog() {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Catalog;

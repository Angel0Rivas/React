import React, { useEffect, useState } from 'react';

function ItemDetail({ itemId }) {
  const [item, setItem] = useState(null);
  return (
    <div className="item-details">
      <h2>{item.name}</h2>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
    </div>
  );
}

export default ItemDetail;
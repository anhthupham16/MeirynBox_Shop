import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import '../styles/ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>
      <button onClick={() => onAddToCart(product)}><FaCartArrowDown size={20} />
      </button>
    </div>
  );
}

export default ProductCard;
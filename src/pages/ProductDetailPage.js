import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MascotImage from '../assets/Mascot KV 1.png';
import '../styles/ProductDetailPage.css';

// Produktdaten (muss mit der ID von der Homepage übereinstimmen)
const productsData = [
  { id: 1, name: 'Schlüsselanhänger', price: 5, description: 'Anime-Charakter-Schlüsselanhänger.', image: 'https://via.placeholder.com/400/0000FF/808080?text=Laptop' },
  { id: 2, name: 'Karte', price: 5, description: 'Anime-Charakter-Karte mit abgerundeten Ecken.', image: 'https://via.placeholder.com/400/FF0000/FFFFFF?text=Smartphone' },
  { id: 3, name: 'Figur', price: 9, description: 'Anime-Charakter-Aufsteller aus Acrylkunststoff für den Schreibtisch.', image: 'https://via.placeholder.com/400/00FF00/000000?text=Headphones' },
  { id: 4, name: 'ArtPlakat', price: 4, description:'Anime-Charakter-Bildplakat', image: 'https://via.placeholder.com/150/00FF00/000000?text=Headphones' },
];


function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Suchen Produkte nach ID
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="product-detail-page">Produktdetails werden geladen...</div>;
  }

  // Funktion „Zum Warenkorb hinzufügen“
  const handleAddToCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = savedCart.find(item => item.id === product.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = savedCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...savedCart, { ...product, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} wurde dem Warenkorb hinzugefügt!`);
  };

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>
        <p className="product-description">{product.description}</p>
        <button onClick={handleAddToCart}>in den Warenkorb legen</button>
        <img src={MascotImage} alt="Mascot" className="product-card-mascot" />
      </div>
    </div>
  );
}

export default ProductDetailPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetailPage.css';
// Import Bilder aus assets
import produkt1Img from '../assets/produkt1.jpg';
import produkt2Img from '../assets/produkt2.jpg';
import produkt3Img from '../assets/produkt3.jpg';
import produkt4Img from '../assets/produkt4.jpg';
import produkt5Img from '../assets/produkt5.jpg';
import mascot3Img from '../assets/Mascot3.png';


// Produktdaten (muss mit der ID von der Homepage übereinstimmen)
const productsData = [
  { id: 1, name: 'Schlüsselanhänger', price: 5, description: 'Anime-Charakter-Schlüsselanhänger.', image: produkt1Img },
  { id: 2, name: 'Karte', price: 5, description: 'Anime-Charakter-Karte mit abgerundeten Ecken.', image: produkt2Img },
  { id: 3, name: 'Figur', price: 9, description: 'Anime-Charakter-Aufsteller aus Acrylkunststoff für den Schreibtisch.', image: produkt3Img },
  { id: 4, name: 'ArtPlakat', price: 4, description:'Anime-Charakter-Bildplakat', image: produkt4Img },
  { id: 5, name: 'Sticker', price: 3, description:'Anime-Charakter-Sticker', image: produkt5Img },
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
        <p className="product-price">{product.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>
        <p className="product-description">{product.description}</p>
        <button onClick={handleAddToCart}>in den Warenkorb legen</button>
        <img
          src={mascot3Img}
          alt="Meiryn"
          className="product-detail-mascot3"
        />
      </div>
    </div>
  );
}

export default ProductDetailPage;
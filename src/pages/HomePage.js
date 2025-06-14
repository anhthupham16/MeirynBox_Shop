import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';
// Import Bilder aus assets
import produkt1Img from '../assets/produkt1.jpg';
import produkt2Img from '../assets/produkt2.jpg';
import produkt3Img from '../assets/produkt3.jpg';
import produkt4Img from '../assets/produkt4.jpg';
import produkt5Img from '../assets/produkt5.jpg';

// Produktdaten
const initialProducts = [
  { id: 1, name: 'Schlüsselanhänger', price: 5, image: produkt1Img },
  { id: 2, name: 'Karte', price: 5, image: produkt2Img },
  { id: 3, name: 'Figur', price: 9, image: produkt3Img },
  { id: 4, name: 'ArtPlakat', price: 4, image: produkt4Img },
  { id: 5, name: 'Sticker', price: 3, image: produkt5Img },
  // Hier werden andere Produkte hinzugefügt
];

function HomePage() {
  /* Zur späteren Verwendung, falls zusätzliche Produktsuchfilterfunktionen benötigt werden
  const [products, setProducts] = useState(initialProducts); */
  const products = initialProducts; // Die Produktliste ist statisch.
  const [cart, setCart] = useState(() => {
    // Holen sich den Warenkorb bei der Initialisierung aus dem lokalen Speicher
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Speichern den Warenkorb bei jeder Warenkorbänderung im lokalen Speicher
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.name} wurde dem Warenkorb hinzugefügt!`);
  };

  return (
    <div className="home-page">
      <h1>Unsere Produkte</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
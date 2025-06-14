import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

// Produktdaten
const initialProducts = [
  { id: 1, name: 'Schlüsselanhänger', price: 5, image: 'https://via.placeholder.com/150/0000FF/808080?text=Laptop' },
  { id: 2, name: 'Karte', price: 5, image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Smartphone' },
  { id: 3, name: 'Figur', price: 9, image: 'https://via.placeholder.com/150/00FF00/000000?text=Headphones' },
  { id: 4, name: 'ArtPlakat', price: 4, image: 'https://via.placeholder.com/150/00FF00/000000?text=Headphones' },
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
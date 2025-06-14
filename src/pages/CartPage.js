import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = (event) => {
    event.preventDefault(); // Neuladen der Seite verhindern
    if (cartItems.length === 0) {
      alert('Ihr Warenkorb ist leer. Bitte fügen Sie vor dem Bezahlen einige Artikel hinzu.');
      return;
    }
    // Zahlen
    alert(`Gesamtbetrag: ${calculateTotal().toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}. Checkout-Funktionalität soll implementiert werden!`);
    setCartItems([]); // Warenkorb nach dem Bezahlvorgang leeren
  };

  return (
    <div className="cart-page">
      <h1>Ihr Warenkorb</h1>

      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer. <Link to="/">Jetzt einkaufen!</Link></p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">Löschen</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Warenkorbübersicht</h2>
            <p>Artikelanzahl: {cartItems.reduce((count, item) => count + item.quantity, 0)}</p>
            <p>Zwischensumme: <strong>{calculateTotal().toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</strong></p>

            <form onSubmit={handleCheckout}>
              <h3>Infos zum Versand</h3>
              <div className="form-group">
                <label htmlFor="fullName">Vollständiger Name:</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Adresse:</label>
                <input type="text" id="address" name="address" required />
              </div>
              <button type="submit" className="checkout-button">Zur Kasse gehen</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
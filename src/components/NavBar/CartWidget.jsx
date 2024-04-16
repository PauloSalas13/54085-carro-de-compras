import React, { useState, useEffect } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import "./cartwidget.css";

const CartWidget = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(parseInt(localStorage.getItem("cartQuantity")) || 0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
      setCartQuantity(JSON.parse(cart).reduce((total, item) => total + item.quantity, 0));
    }
  }, [cartItems]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    setCartQuantity(updatedCart.length); // Actualizar con la longitud del carrito
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    setCartQuantity(updatedCart.length); // Update cart quantity
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cartwidget">
      <div className="cart-icon" onClick={toggleCart}>
        <PiShoppingCartSimple size={30} />
        <span className="cart-text">mi carro</span>
        <span className="cart-quantity">{cartItems.length}</span>
      </div>
      {isCartOpen && (
        <div className="cart-panel">
          <div className="cart-items">
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <span>{item.name}</span>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                  </div>
                ))}
                <button onClick={() => alert("Pagar ahora")}>Pagar Ahora</button>
              </>
            ) : (
              <span>No hay productos en tu carro</span>
            )}
          </div>
          <div className="close-button-container">
            <button className="pepe" onClick={toggleCart}>X</button>
          </div>
        </div>

      )}
    </div>
  );
};

export default CartWidget;

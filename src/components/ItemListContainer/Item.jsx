import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(parseInt(localStorage.getItem("cartQuantity")) || 0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartQuantity(cart.length); // Update cart quantity
    openPopup();
  };


  return (
    <div key={product.id} className="card">
      <div className="image-box-card">
        <Link to={`/detail/${product.id}`}>
          <img
            className="image-card"
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>
      <div className="info-card">
        <h2 className="title-card">{product.name}</h2>
        <p className="description-card">{product.description}</p>
        <div className="price-container">
          <p className="price-normal">${product.price}</p>
          <p style={{ color: "#006400", fontSize: "1.2em", fontWeight: "bold" }}>
            Precio Oferta en Efectivo: <span className="green">${(product.price * 0.9).toFixed(2)}</span>
          </p>
        </div>
        <img
          className="image-carr"
          src="/img/add_cart.svg"
          alt={product.name}
          onClick={addToCart}
        />
        <div className="box-button-item">
          <Link to={`/detail/${product.id}`} className="button-item">
            Ver detalles
          </Link>
        </div>
      </div>

      {isPopupOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ width: "400px", height: "600px" }}>
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            <h3>¡Felicidades! Agregaste {product.name} a tu carro.</h3>
            <img
              className="product-image-modal"
              src={product.image}
              alt={product.name}
              style={{ width: "280px", height: "390px" }}
            />
            <div className="button-container">
              <button>Seguir Comprando</button>
              <div>
                <button>Ver Carro</button>
                <button>Pagar Ahora</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;

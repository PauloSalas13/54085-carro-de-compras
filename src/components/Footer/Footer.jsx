import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link to="/about">Acerca de nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/privacy">Política de privacidad</Link></li>
      </ul>
      <p>&copy; 2024 PC Paulo's</p>
    </footer>
  );
};

export default Footer;
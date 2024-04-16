import React from "react";
import { Link } from "react-router-dom";
import "./privacypolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Términos y Condiciones</h1>
      <p className="privacy-policy-text">
        Las compras que se efectúen en pc Paulo's S.A. (en adelante, “pc
        Paulos), a través de medio online, venta telefónica o en cualquiera
        de nuestras tiendas (en adelante, las “Compras”), estarán sujetas a los
        términos y condiciones previstos en este documento (en adelante, los
        “Términos y Condiciones”), así como a la legislación chilena vigente,
        en particular a la Ley N° 19.496 sobre Protección de los Derechos de
        los Consumidores y a la Ley N° 19.628 sobre Protección de la Vida
        Privada. Es requisito para comprar en pc Paulo's la aceptación de los
        Términos y Condiciones que se indican a continuación:
        <br /><br />
        (...)
      </p>
      <Link to="/" className="privacy-policy-link">
        Volver al inicio
      </Link>
    </div>
  );
};

export default PrivacyPolicy;

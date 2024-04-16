import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.css"; // Archivo de estilos CSS para este componente

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">Acerca de nosotros</h2>
      <p className="about-us-text">
        Paulo's es una empresa chilena, que comenzó sus operaciones en abril
        del año 2024, transformándose durante este tiempo, en la mayor cadena
        de tiendas especialista en tecnología del país. Empezamos nuestra historia
        enfocados en el rubro de las computadoras de escritorio, pero crecimos
        sin parar hasta lograr un mix inigualable de productos tecnológicos,
        tanto para personas como para pequeñas y medianas empresas. Tenemos
        además de todo lo relacionado al rubro de la computación opciones en
        telefonía, impresión, fotografía, audio, seguridad, domótica y
        entretenimiento (juegos, consolas y televisores). ¡Bienvenidos al mundo
        pc Paulo's!
      </p>
      <img
        src="https://via.placeholder.com/150"
        alt="Logo de pc Paulo's"
        className="about-us-image"
      />
      <Link to="/" className="about-us-link">
        Volver al inicio
      </Link>
    </div>
  );
};

export default AboutUs;

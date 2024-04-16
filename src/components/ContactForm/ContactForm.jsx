import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contacto.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Aquí puedes limpiar el formulario después de enviarlo
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Formulario de contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email de contacto:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Teléfono de contacto:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Comentario:
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </label>
        <div className="button-container">
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleClear}>
            Limpiar
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Link to="/" className="privacy-policy-link">
            Volver al inicio
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-navbar">
        <img className="icon-navbar" src="/img/header.png" />
        <span className="brand-title">PC Paulo's</span>
      </Link>

      <ul className="categories-navbar">
        <Link to="/category/Notebook" className="categorie-navbar">
        Notebooks
        </Link>
        <Link to="/category/TV" className="categorie-navbar">
          Smart TV y Audio
        </Link>
        <Link to="/category/Smartphones" className="categorie-navbar">
          Teléfonos Celulares
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;

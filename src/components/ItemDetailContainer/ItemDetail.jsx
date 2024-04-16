import "./itemDetailContainer.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="info-detail">
        <h1 className="title">{product.name}</h1>
        <p className="description">{product.fullDescription}</p>
        <p className="price">Precio: ${product.price}</p>
        <Link to="/" className="button-back">Volver</Link>
      </div>
      <div className="image-detail">
        <img src={product.image} style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};
export default ItemDetail;

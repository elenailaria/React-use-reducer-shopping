import { faAdd, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ product, onDelete, onIncrement, onDecrement }) => {
  return (
    <div className="product">
      <div className="product-card">
      <p>Product Name: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Number: {product.quantity}</p>
      <button onClick={onIncrement}>
      <FontAwesomeIcon icon={faAdd} />

      </button>
      <button onClick={onDecrement} disabled={product.quantity === 0}>
      <FontAwesomeIcon icon={faMinus}/>

      </button>
      <button onClick={onDelete}>
      <FontAwesomeIcon icon={faTrash}/>

      </button>
      </div>
      
    </div>
  );
};

export default Product;

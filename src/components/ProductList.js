import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductActions } from "../provider/CounterProvider";
import Product from "./Product";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";

const ProductList = () => {
  //   const { removeHandler, addHandler, minusHandler, products } =
  //     useProductActions();

  const { products, dispatch } = useProductActions();

  return (
    <div className="icon-come-back">
{!products.length && <div>
        <FontAwesomeIcon icon={faFaceSadCry}/>
        <h3>Please come back soon!</h3>
        </div>}


      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            onDelete={() => dispatch({ type: "remove", id: product.id })}
            onIncrement={() => dispatch({ type: "increment", id: product.id })}
            onDecrement={() => dispatch({ type: "decrement", id: product.id })}
          />
        );
      })}
    </div>
  );
};

export default ProductList;

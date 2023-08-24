import { useProductActions } from "../provider/CounterProvider";

const NavBar = () => {
  // Without Destructuring (please try with Destructuring as well)
  const products = useProductActions();
  const totalItem = products.products.filter((p) => p.quantity > 0).length;

  return (
    <header>
      <h2>Shopping List</h2>
      <span> Total Items: {totalItem}</span>
    </header>
  );
};

export default NavBar;

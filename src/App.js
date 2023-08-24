import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import CounterProvider from "./provider/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <NavBar />
        <ProductList />
      </div>
    </CounterProvider>
  );
}

export default App;

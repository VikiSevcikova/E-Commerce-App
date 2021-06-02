import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/navbar/footer/Footer";
import ProductsPage from "./components/productspage/ProductsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default App;

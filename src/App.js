import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

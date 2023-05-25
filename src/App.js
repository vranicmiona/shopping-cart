import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Footer from "../src/components/Footer/Footer";
import image1 from "../src/assets/shop.img1.jpg";
import image2 from "../src/assets/shop.img2.jpg";
import image3 from "../src/assets/shop.img3.jpg";
import image4 from "../src/assets/shop.img4.jpg";
import image5 from "../src/assets/shop.img5.jpg";
import image6 from "../src/assets/shop.img6.jpg";
import image7 from "../src/assets/shop.img7.jpg";

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
        <div className="images">
          <img src={image1} alt="1"></img>
          <img src={image2} alt="2"></img>
          <img src={image3} alt="3"></img>
          <img src={image4} alt="4"></img>
          <img src={image5} alt="5"></img>
          <img src={image6} alt="6"></img>
          <img src={image7} alt="7"></img>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

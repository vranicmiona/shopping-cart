import React from "react";
import "./Homepage.css";
import image1 from "../../assets/shop.img1.jpg";
import image3 from "../../assets/shop.img3.jpg";
import image5 from "../../assets/shop.img5.jpg";
import image11 from "../../assets/shop.img11.jpg";
import image10 from "../../assets/shop.img10.jpg";
import image9 from "../../assets/shop.img9.jpg";
import image6 from "../../assets/shop.img6.jpg";
import image7 from "../../assets/shop.img7.jpg";
import image8 from "../../assets/shop.img8.jpg";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="images">
      <img src={image1} alt="1"></img>
      <div className="button">
        <Link to="/products">
          <Button
            variant="outlined"
            style={{
              positon: "relative",
              right: "0.2%",
              top: "40%",
              backgroundColor: "violet",
              color: "white",
            }}
          >
            <b>Go to products</b>
          </Button>
        </Link>
      </div>
      <img src={image7} alt="7"></img>
      <img src={image8} alt="8"></img>
      <img src={image6} alt="6"></img>
      <img src={image11} alt="11"></img>
      <img src={image5} alt="5"></img>
      <img src={image3} alt="3"></img>
      <img src={image10} alt="10"></img>
      <img src={image9} alt="9"></img>
    </div>
  );
};

export default Homepage;

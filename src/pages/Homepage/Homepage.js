import React from "react";
import "./Homepage.css";
import image1 from "../../assets/shop.img1.jpg";
import image2 from "../../assets/shop.img2.jpg";
import image3 from "../../assets/shop.img3.jpg";
import image4 from "../../assets/shop.img4.jpg";
import image5 from "../../assets/shop.img5.jpg";
import image6 from "../../assets/shop.img6.jpg";
import image7 from "../../assets/shop.img7.jpg";
const Homepage = () => {
  return (
    <div className="images">
      <img src={image1} alt="1"></img>
      <img src={image2} alt="2"></img>
      <img src={image3} alt="3"></img>
      <img src={image4} alt="4"></img>
      <img src={image5} alt="5"></img>
      <img src={image6} alt="6"></img>
      <img src={image7} alt="7"></img>
    </div>
  );
};

export default Homepage;

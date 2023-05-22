import React from "react";
import "./Footer.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 style={{ fontSize: "15px" }}>&copy;CopyRight 2023</h2>
      <div className="footer2">
        <p
          style={{
            color: "white",
            fontSize: "13px",
            marginTop: "40px",
            marginBottom: "15px",
          }}
        >
          Sing up for our emails to get the inside scoop on special offers and
          new products.
        </p>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small">
            Sing up
          </Button>
        </Stack>
        <section style={{ marginRight: "150px", marginTop: "-33px" }}>
          <p style={{ color: "white", padding: "3px", fontSize: "10px" }}>
            <b>Stay in Touch</b>
          </p>
          <p
            style={{
              color: "blue",
              padding: "3px",
              fontSize: "10px",
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </p>

          <a href="https://www.facebook.com/">
            <FacebookOutlinedIcon
              style={{ color: "white", fonSize: "50px", padding: "-5px" }}
            />{" "}
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon
              style={{ color: "white", fonSize: "50px", padding: "-5px" }}
            />{" "}
          </a>
          <a href="https://www.pinterest.com/">
            <PinterestIcon
              style={{ color: "white", fonSize: "50px", padding: "-5px" }}
            />{" "}
          </a>
        </section>
      </div>
      <div className="footer2" style={{ color: "white", fontSize: "10px" }}>
        <p className="paragraf">
          Caracters<br></br> Facebook<br></br>Outlined<br></br>Fruits<br></br>{" "}
          Vegetables<br></br> Homehold<br></br> Tools<br></br>Glasses<br></br>{" "}
          Shoes<br></br> T-Shirts<br></br>
          Jeans
        </p>
        <div className="footer3">
          <p>New Sale Contact Us Site Map Careers</p>
        </div>
        <div className="footer4">
          <p>
            Order Tracking Reaturn/Exchange Shipping Info Account Info Store
            Locator
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

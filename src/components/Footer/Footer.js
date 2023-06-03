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
      <div className="main">
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
        <div className="footer3">
          <p>Caracters</p>
          <p>Facebook</p>
          <p>Outlined</p>
          <p>Homehold</p>
          <p>Tools</p>
          <p>Instagram</p>
          <p>D23</p>
          <p>Contact us</p>
          <p>Oder Tarcking</p>
          <p>Retrun/Exhange</p>
          <p>Shopping Info</p>
          <p>Store Locator</p>
          <p>Guest Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

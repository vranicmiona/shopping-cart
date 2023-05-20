import React from "react";
import "./Footer.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 style={{ fontSize: "15px" }}>&copy;CopyRight 2023</h2>
      <div className="footer2">
        <p style={{ color: "white", fontSize: "10px" }}>
          Sing up for our emails to get the inside scoop on special offers and
          new products.
        </p>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small">
            Sing up
          </Button>
          <b>Stay in Touch</b>
          Privacy Policy
        </Stack>
      </div>
    </footer>
  );
};

export default Footer;

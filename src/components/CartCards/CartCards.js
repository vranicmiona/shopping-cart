import React, { useContext, useState } from "react";
import "./CartCards.css";
import { AppContext } from "../../context/AppContext";
import DeleteButtonFromCart from "../Button/ButtonDeleteFromCart";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import ButtonThird from "../Button/ButtonThird";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CartCards({
  id,
  productName,
  productPrice,
  productImage,
  quantity,
}) {
  const { increase, decrease, deleteFromCart } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="main">
      <div className="cart-card">
        <img className="image" src={productImage} alt={productName} />
        <div className="details">
          <h2 className="product-name">{productName}</h2>
          <p className="product-price">{productPrice * quantity}$</p>
          <p className="quantity">Quantity:{quantity}</p>
          <div className="button">
            <DeleteButtonFromCart onDelete={handleOpen}>
              Open modal
            </DeleteButtonFromCart>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              {" "}
              <Box
                sx={{ ...style, width: 400, height: 140, textAlign: "center" }}
              >
                <h3 style={{ fontWeight: 100 }}>
                  Are you sure you want to remove the product from the cart?
                </h3>
                <div style={{ marginTop: 20 }}>
                  <ButtonThird
                    onDelete={() => {
                      deleteFromCart(id);
                    }}
                  />
                  <Button onClick={handleClose}>No</Button>
                </div>
              </Box>
            </Modal>
            <div className="increseDecrease">
              {quantity <= 1 ? (
                <Button
                  onClick={() => {
                    decrease(id);
                  }}
                  style={{ width: 30, fontSize: 20 }}
                  variant="outlined"
                  disabled
                >
                  -
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    decrease(id);
                  }}
                  style={{ width: 30, fontSize: 20 }}
                  variant="outlined"
                >
                  -
                </Button>
              )}
              <Button
                onClick={() => increase(id)}
                style={{ width: 30, fontSize: 20 }}
                variant="outlined"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

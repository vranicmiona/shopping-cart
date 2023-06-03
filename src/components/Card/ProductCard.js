import React, { useEffect, useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import { AppContext } from "../../context/AppContext";
import DeleteButton from "../../components/Button/Button";
import { CardActions, CardMedia } from "@mui/material";

export default function ProductCard({
  id,
  title,
  imageURL,
  onClick,
  price,
  deleteFromCart,
}) {
  const { cart, addToCart } = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!!cart.find((product) => product.id === id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cart, id]);
  return (
    <div className="mainContainer">
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia sx={{ height: 250 }} image={imageURL} />
        <CardContent>
          <div style={{ height: 70 }}>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
          </div>
          <div
            style={{
              height: 50,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="description">
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize={18}
                fontWeight={600}
              >
                Price: {price} EUR
              </Typography>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                {!isAdded ? (
                  <Button
                    size="small"
                    variant="outlined"
                    color="success"
                    onClick={onClick}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <DeleteButton onDelete={deleteFromCart} />
                )}
              </CardActions>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

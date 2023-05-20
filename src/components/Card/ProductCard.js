import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";

const ProductCard = ({ productName, productPrice, productImage, onPress }) => {
  //
  return (
    <Card sx={{ maxWidth: 400, height: 450 }}>
      <CardMedia
        sx={{ height: 300, objectFit: "cover", width: 400 }}
        image={productImage}
        title={productName}
      />
      <CardContent>
        <div style={{ height: 50 }}>
          <Typography gutterBottom variant="h5" component="div">
            Perfume Oil
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
          <Typography
            variant="body1"
            color="text.secondary"
            fontSize={18}
            fontWeight={600}
          >
            Price: {productPrice} EUR
          </Typography>

          <Button
            size="small"
            variant="outlined"
            color="success"
            onClick={onPress}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

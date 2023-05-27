import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";

const ProductCard = ({ id, title, imageURL, onClick, price }) => {
  //
  return (
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
          </div>

          <Button
            size="small"
            variant="outlined"
            color="success"
            onClick={onClick}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

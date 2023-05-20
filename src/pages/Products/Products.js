import React from "react";
import "./Products.css";
import ProductCard from "../../components/Card/ProductCard";

export default function Products() {
  // ovde se samo renderuju i prikazuju sve kartice
  return (
    <div>
      <ProductCard />
    </div>
  );
}

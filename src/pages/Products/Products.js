import React, { useContext, useState } from "react";
import "./Products.css";
import ProductCard from "../../components/Card/ProductCard";
import products from "../../common/products.json";
import { Pagination } from "@mui/material";

export default function Products() {
  // ovde se samo renderuju i prikazuju sve kartice
  const [page, setPage] = useState(1); // jedna stranica da se prikazuje
  const handleChange = (event, value) => {
    // ne radi paginacija bez eventa
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // skroll za vracanje stranice na pocetak
  };
  const productsPerPage = 12;
  const numOfPage = Math.ceil(products.length / productsPerPage);
  return (
    <>
      <div className="cards">
        {products
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageURL={product.imageURL}
              title={product.title}
              price={product.price}
            />
          ))
          .slice((page - 1) * productsPerPage, page * productsPerPage)}
      </div>
      <div className="pagination">
        <Pagination
          count={numOfPage}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
          size="large"
        />
      </div>
    </>
  );
}

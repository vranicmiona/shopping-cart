import React, { useContext, useState } from "react";
import "./Products.css";
import ProductCard from "../../components/Card/ProductCard";
import { Pagination } from "@mui/material";
import { AppContext } from "../../context/AppContext";

export default function Products() {
  const { products, addToCart, cart, deleteFromCart } = useContext(AppContext);
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
              addToCart={() => {
                addToCart(product.id);
              }}
              deleteFromCart={() => {
                deleteFromCart(product.id);
              }}
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

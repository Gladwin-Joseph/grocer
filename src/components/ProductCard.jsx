import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Link className="exercise-card" to={`/product/${product.product_id}`}>
      <img
        src={product.product_photos[0]}
        alt={product.product_title}
        loading="lazy"
      />
      <Typography
        variant="h5"
        color="black"
        sx={{ margin: "0.5rem 5%" }}
        fontFamily="'Raleway', sans-serif"
      >
        {product.product_title}
      </Typography>
      <Typography
        variant="h6"
        color="#384F34"
        sx={{ margin: "0.5rem 5%" }}
        fontFamily="'Raleway', sans-serif"
      >
        Store:{product.offer.store_name}
      </Typography>
      <Typography
        variant="h6"
        color="#384F34"
        sx={{ margin: "0.5rem 5%" }}
        fontFamily="'Raleway', sans-serif"
      >
        Reviews:{product.product_num_reviews}
      </Typography>
      <Typography
        variant="h4"
        color="#57994C "
        sx={{ margin: "0.5rem 5%" }}
        fontFamily="'Raleway', sans-serif"
      >
        {product.offer.price}
      </Typography>
    </Link>
  );
};

export default ProductCard;

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
const Products = ({ products, setProducts }) => {
  return (
    <Box id="products" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px" fontFamily="'Raleway', sans-serif">
        Results...
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {products?.data?.map((product, index) => (
          <ProductCard product={product} />
        ))}
      </Stack>
    </Box>
  );
};

export default Products;

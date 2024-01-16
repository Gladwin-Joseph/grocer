import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "./HeroBanner";
import SearchProducts from "./SearchProducts";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchProducts setProducts={setProducts} />
    </Box>
  );
};
export default Home;

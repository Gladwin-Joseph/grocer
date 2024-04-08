import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { productsOptions, fetchData } from "../utils/fetchData";
import Products from "./Products";

const SearchProducts = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const productsData = await fetchData(
        `https://real-time-product-search.p.rapidapi.com/search?q=${search}&country=in&language=en`,
        productsOptions
      );

      setProducts(productsData);
      setSearch("");
    } else {
      alert("Please enter a product");
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        fontFamily="'Raleway', sans-serif"
      >
        Search For Groceries
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "6px"
            },
            width: { lg: "800px", xs: "350px" },
            borderRadius: "40px",
            backgroundColor: "white"
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Products..."
          type="text"
        />
        <Button
          color="success"
          variant="contained"
          sx={{
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0px"
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Products setProducts={setProducts} products={products} />
    </Stack>
  );
};

export default SearchProducts;

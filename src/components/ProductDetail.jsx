import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { productsOptions, fetchData } from "../utils/fetchData";
import Detail from "./Detail";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProductsData = async () => {
      const productUrl = `https://real-time-product-search.p.rapidapi.com`;

      const productDetailData = await fetchData(
        `${productUrl}/product-details?product_id=${id}&country=in&language=en`,
        productsOptions
      );

      setProductDetail(productDetailData);
    };

    fetchProductsData();
  }, [id]);
  return (
    <Box>
      <Detail productDetail={productDetail} />
    </Box>
  );
};

export default ProductDetail;

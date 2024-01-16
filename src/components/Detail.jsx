import React from "react";
import { Typography, Stack, Button } from "@mui/material";

const Detail = ({ productDetail }) => {
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={productDetail?.data?.product.product_photos[0]}
        alt="name"
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontFamily="'Raleway', sans-serif">
          {productDetail?.data?.product.product_title}
        </Typography>
        <Typography variant="h6" fontFamily="'Raleway', sans-serif">
          {productDetail?.data?.product.product_description}
        </Typography>
        <Stack direction="row" gap="30px" alignItems="center">
          <Typography variant="h4" fontFamily="'Raleway', sans-serif">
            Store: {productDetail?.data?.product.offer.store_name}
          </Typography>
          <Typography
            variant="h4"
            color="#4E7B47 "
            fontFamily="'Raleway', sans-serif"
          >
            {productDetail?.data?.product.offer.price}
          </Typography>
        </Stack>
        <a href={productDetail?.data?.product.offer.offer_page_url}>
          <Button
            color="success"
            variant="contained"
            sx={{ width: { lg: "180px", xs: "160px" } }}
            fontFamily="'Raleway', sans-serif"
          >
            Take me there
          </Button>
        </a>
      </Stack>
    </Stack>
  );
};

export default Detail;

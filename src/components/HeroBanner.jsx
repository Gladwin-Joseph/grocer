import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/veggie_1.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const HeroBanner = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Box
      sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      {isAuthenticated ? (
        <Typography
          color="#3E4B3C"
          fontWeight="600"
          fontSize="26px"
          fontFamily="'Raleway', sans-serif"
        >
          Welcome {user.name} to Grocer
        </Typography>
      ) : (
        <Typography
          color="#3E4B3C"
          fontWeight="600"
          fontSize="30px"
          fontFamily="'Raleway', sans-serif"
        >
          Grocer
        </Typography>
      )}
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        fontFamily="'Raleway', sans-serif"
      >
        Get your grocery <br /> from various stores
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={4}
        fontFamily="'Raleway', sans-serif"
      >
        Check out various products
      </Typography>
      <Button
        variant="contained"
        color="success"
        href="#products"
        fontFamily="'Raleway', sans-serif"
      >
        Explore Products
      </Button>
      <Typography
        fontWeight={600}
        color="#4B933F"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          padding: "10px"
        }}
        fontSize="200px"
      >
        Grocery
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;

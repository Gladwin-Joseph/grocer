import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "130px", height: "46px", margin: "0 20px" }}
        />
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#58954E",
          fontSize: "24px",
          paddingTop: "10px",
          fontFamily: "'Raleway', sans-serif",
        }}
      >
        Home
      </Link>
    </Stack>
  );
};

export default Navbar;

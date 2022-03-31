import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import LoginForm from "../../components/LoginForm";
import Sidebar from "../../components/Sidebar";

export default function LoginPage() {
  const Navigate = useNavigate();

  const logInUser = async (username, password) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://api.github.com/users/${username}`,
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      });
      localStorage.setItem("avatarImg", res.data.avatar_url);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("isLoggedIn", true);
      Navigate("/profile");
    } catch (err) {
      alert("User Not Found!");
    }
  };
  return (
    <Grid templateColumns={"25vw 75vw"}>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem>
        <LoginForm logInUser={logInUser} />
      </GridItem>
    </Grid>
  );
}

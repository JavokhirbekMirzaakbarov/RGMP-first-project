import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import TodoPage from "../TodoPage";

export default function HomePage() {
  const [user, setUser] = useState({
    name: "",
    avatarImg: "",
    isLoggedIn: false,
  });
  useEffect(() => {
    const userFromLocalStorage = {
      name: localStorage.getItem("name"),
      avatarImg: localStorage.getItem("avatarImg"),
      isLoggedIn: localStorage.getItem("isLoggedIn"),
    };
    setUser(userFromLocalStorage);
  }, []);
  return (
    <Grid templateColumns={"25vw 75vw"}>
      <GridItem>
        <Sidebar {...user} />
      </GridItem>
      <GridItem>
        <TodoPage />
      </GridItem>
    </Grid>
  );
}

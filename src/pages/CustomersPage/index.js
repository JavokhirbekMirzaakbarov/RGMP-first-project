import { Box, Grid, GridItem, Heading, Select } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import CustomersList from "../../components/CustomersList";
import Sidebar from "../../components/Sidebar";
import { users } from "./data";

export default function Customers() {
  const [user, setUser] = useState({
    name: "",
    avatarImg: "",
    isLoggedIn: false,
  });
  const [customers, setCustomers] = useState(users);

  useEffect(() => {
    const userFromLocalStorage = {
      name: localStorage.getItem("name"),
      avatarImg: localStorage.getItem("avatarImg"),
      isLoggedIn: localStorage.getItem("isLoggedIn"),
    };
    setUser(userFromLocalStorage);
  }, []);

  const handleChange = (e) => {
    setCustomers(() =>
      users.filter((_, index) => index < Number(e.target.value))
    );
  };

  const sortBy = (sortByKey) => {
    setCustomers((prev) =>
      [...prev].sort((a, b) =>
        a[sortByKey] > b[sortByKey] ? 1 : b[sortByKey] > a[sortByKey] ? -1 : 0
      )
    );
  };

  return (
    <Grid templateColumns={"25vw 75vw"}>
      <GridItem>
        <Sidebar {...user} />
      </GridItem>
      <GridItem>
        <Box pt={10} pr={10} pl={10}>
          <Heading as="h2">Customers</Heading>
          <Select
            onChange={handleChange}
            w="30%"
            mt={2}
            placeholder="Select option"
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value={users.length}>All</option>
          </Select>
          <Box overflowY="auto" maxHeight="80vh" mt={5}>
            <CustomersList sortBy={sortBy} customers={customers} />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

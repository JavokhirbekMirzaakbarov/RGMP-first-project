import React from "react";
import { Avatar, Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Sidebar({ name, avatarImg, isLoggedIn }) {
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    Navigate("/");
  };
  return (
    <Box p={30} h="100vh" bg="rgb(65, 60, 88)">
      <VStack spacing="24px">
        <Avatar size="2xl" src={`${avatarImg}`} />

        <Heading as="h6" color={"white"}>
          {name}
        </Heading>
        {isLoggedIn && (
          <>
            <Button
              onClick={() => Navigate("/profile")}
              colorScheme="teal"
              w="100%"
              size="lg"
            >
              Terminals
            </Button>
            <Button
              onClick={() => Navigate("/customers")}
              colorScheme="teal"
              w="100%"
              size="lg"
            >
              Customers
            </Button>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
              w="100%"
              size="lg"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </>
        )}
        <Box color="#fff" position={"fixed"} bottom={30}>
          Copyright &copy; 2022
        </Box>
      </VStack>
    </Box>
  );
}

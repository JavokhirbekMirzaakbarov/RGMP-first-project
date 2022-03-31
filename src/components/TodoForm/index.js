import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function TodoForm({ onFormSubmit, currentTodo }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentTodo) {
      setName(currentTodo.name);
      setDescription(currentTodo.description);
    }
  }, [currentTodo]);

  const handleSubmit = () => {
    if (name && description) {
      const newTodo = {
        name,
        description,
      };

      onFormSubmit(newTodo);
      setName("");
      setDescription("");
    } else {
      alert("Name and description cannot be empty!");
    }
  };

  return (
    <Box>
      <Heading as="h2">Terminals</Heading>
      <HStack mt={5} w="100">
        <Box w="33%">
          <FormControl>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              isRequired
            />
          </FormControl>
        </Box>
        <Box w="33%">
          <FormControl>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              isRequired
            />
          </FormControl>
        </Box>
        <Box w="33%">
          <Button
            w="100%"
            onClick={handleSubmit}
            colorScheme="teal"
            type="submit"
          >
            {currentTodo ? "UPDATE" : "ADD"}
          </Button>
        </Box>
      </HStack>
    </Box>
  );
}

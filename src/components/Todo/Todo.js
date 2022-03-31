import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Checkbox, Td, Text, Tr } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
  const [completed, setCompleted] = useState(todo.completed);

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  const handleUpdate = () => {
    onUpdateTodo(todo.id);
  };

  return (
    <Tr>
      <Td>
        <Checkbox
          onChange={(e) => setCompleted(e.target.checked)}
          mr={2}
          size="md"
          colorScheme="green"
        />
        {completed ? <Text as="del">{todo.name}</Text> : todo.name}
      </Td>
      <Td>
        <span>{todo.description}</span>
        <DeleteIcon onClick={handleDelete} float="right" />
        <EditIcon onClick={handleUpdate} mr="5" float="right" />
      </Td>
    </Tr>
  );
}

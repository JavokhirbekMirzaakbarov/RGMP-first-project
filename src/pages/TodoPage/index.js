import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import Todo from "../../components/Todo/Todo";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [currentTodoId, setCurrentTodoId] = useState(NaN);
  const [index, setIndex] = useState(1);

  const onFormSubmit = (todo) => {
    if (currentTodoId) {
      onUpdateTodo(currentTodoId, todo);
    } else {
      onAddTodo(todo);
    }
  };

  const onAddTodo = (todo) => {
    const newTodo = {
      ...todo,
      id: index,
      completed: false,
    };
    setIndex(index + 1);
    setTodos((prev) => [...prev, newTodo]);
  };

  const onDeleteTodo = (id) => {
    const remaining = todos.filter((todo) => todo.id !== id);
    setTodos(remaining);
  };

  const onUpdateTodo = (id, newValues) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          name: newValues.name,
          description: newValues.description,
        };
      else return todo;
    });
    setTodos(updatedTodos);
    setCurrentTodoId(NaN);
  };

  return (
    <Box p={10}>
      <TodoForm
        currentTodo={todos.find((todo) => todo.id === currentTodoId)}
        onFormSubmit={onFormSubmit}
      />
      <Table mt={5}>
        <Thead>
          <Tr bg="#4FD1C5">
            <Th>Name</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos &&
            todos.map((todo) => (
              <Todo
                onUpdateTodo={(id) => setCurrentTodoId(id)}
                onDeleteTodo={onDeleteTodo}
                todo={todo}
                key={todo.id}
              />
            ))}
        </Tbody>
      </Table>
    </Box>
  );
}

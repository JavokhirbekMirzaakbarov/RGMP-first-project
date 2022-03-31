import { Td, Tr } from "@chakra-ui/react";
import React from "react";

export default function Customer({ customer }) {
  return (
    <Tr>
      <Td>{customer.id}</Td>
      <Td>{customer.name}</Td>
      <Td>{customer.amount}</Td>
      <Td>{customer.quantity}</Td>
      <Td>{customer.total}</Td>
    </Tr>
  );
}

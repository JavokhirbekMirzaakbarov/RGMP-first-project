import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import Customer from "../Customer/Customer";

export default function CustomersList({ customers, sortBy }) {
  const handleClick = (e) => sortBy(e.target.innerText.toLowerCase());

  return (
    <Table variant="striped">
      <Thead>
        <Tr bg="#4FD1C5">
          <Th onClick={handleClick}> ID</Th>
          <Th onClick={handleClick}>Name</Th>
          <Th onClick={handleClick}>Amount</Th>
          <Th onClick={handleClick}>Quantity</Th>
          <Th onClick={handleClick}>Total</Th>
        </Tr>
      </Thead>
      <Tbody>
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </Tbody>
    </Table>
  );
}

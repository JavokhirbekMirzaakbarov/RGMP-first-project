import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

export default function LoginForm({ logInUser }) {
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required!"),
    password: Yup.string()
      .matches(/[a-z]+[0-9]+/i, "Must contain a letter and a number")
      .required("Required!"),
  });

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values, { resetForm }) => {
        logInUser(values.username, values.password);
        resetForm();
      },
      validationSchema: loginSchema,
    });

  return (
    <Box p={10}>
      <Heading as="h1">Authentication Page</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={touched.username && errors.username}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormErrorMessage>{errors.username}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={touched.password && errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Log In
        </Button>
      </form>
    </Box>
  );
}

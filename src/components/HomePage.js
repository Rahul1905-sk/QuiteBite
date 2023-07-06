import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Button,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import ProductAddToCart from "./Cart";

const HomePage = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch the list of available dishes from your backend API
    const fetchDishes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/menu");
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <Box bg="gray.100" py="10">
      <Container maxW="container.xl">
        <Heading as="h1" size="xl" textAlign="center" mb="6">
          Welcome to QuickBite!
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="5">
          {dishes.map((data, i) => (
            <ProductAddToCart key={data + i} data={data} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HomePage;

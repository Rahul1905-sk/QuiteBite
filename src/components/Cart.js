// import { Flex, Circle, Box, Image, Badge, useColorModeValue, Icon, chakra, Tooltip } from '@chakra-ui/react';
// import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
// import { FiShoppingCart } from 'react-icons/fi';

// function Rating({ rating, numReviews }) {
//   return (
//     <Flex align="center">
//       {Array(5)
//         .fill('')
//         .map((_, i) => {
//           const roundedRating = Math.round(rating * 2) / 2;
//           if (roundedRating - i >= 1) {
//             return (
//               <BsStarFill
//                 key={i}
//                 style={{ marginLeft: '1' }}
//                 color={i < rating ? 'teal.500' : 'gray.300'}
//               />
//             );
//           }
//           if (roundedRating - i === 0.5) {
//             return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
//           }
//           return <BsStar key={i} style={{ marginLeft: '1' }} />;
//         })}
//       <Box as="span" ml="2" color="gray.600" fontSize="sm">
//         {numReviews} review{numReviews > 1 && 's'}
//       </Box>
//     </Flex>
//   );
// }

// function ProductAddToCart({ data }) {
//   return (
//     <Flex p={50} w="100%" alignItems="center" justifyContent="center">
//       <Box
//         bg={useColorModeValue('white', 'gray.800')}
//         w="500px"
//         borderWidth="1px"
//         rounded="lg"
//         shadow="lg"
//         position="relative"
//         // backgroundColor={"red"}
//         border={'4px solid blue'}
//       >
//         {data.isNew && (
//           <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
//         )}

//         <Image
//         //   objectFit="cover"
//           boxSize="300px" // Set the desired fixed size for the image
//           src={data.Img}
//           alt={`Picture of ${data.Name}`}
//           roundedTop="lg"
//         />

//         <Box p="6">
//           <Box d="flex" alignItems="baseline">
//             {data.isNew && (
//               <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
//                 New
//               </Badge>
//             )}
//           </Box>
//           <Flex mt="1" justifyContent="space-between" alignContent="center">
//             <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
//               {data.Name}
//             </Box>
//             <Tooltip
//               label="Add to cart"
//               bg="white"
//               placement="top"
//               color="gray.800"
//               fontSize="1.2em"
//             >
//               <chakra.a href="#" display="flex">
//                 <Icon as={FiShoppingCart} h={7} w={7} alignSelf="center" />
//               </chakra.a>
//             </Tooltip>
//           </Flex>

//           <Flex justifyContent="space-between" alignContent="center">
//             <Rating rating={data.rating ? data.rating : 4.5} numReviews={data.numReviews ? data.numReviews : 265} />
//             <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
//               <Box as="span" color="gray.600" fontSize="lg">
//                 ₹
//               </Box>
//               {data.Price}
//             </Box>
//           </Flex>
//         </Box>
//       </Box>
//     </Flex>
//   );
// }

// export default ProductAddToCart;

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

function Rating({ rating, numReviews }) {
  return (
    <Flex align="center">
      {/* Rating stars */}
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}

      {/* Number of reviews */}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 ? "s" : ""}
      </Box>
    </Flex>
  );
}

function ProductAddToCart({ data }) {
  return (
    <Flex p={50} w="100%" alignItems="center" justifyContent="center">
      {/* Card */}
      <Box
        bg={useColorModeValue("white", "gray.800")}
        // maxW="600px" // Set the desired width of the card
        //   w={'400px'}
        //   h={'300px'}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
     
      >
        {/* New badge */}
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        {/* Product image */}
        <Box w={'300px'} h={'200px'}>
        <Image w={'100%'}  objectFit={'contain'}  src={data.Img} alt={`Picture of ${data.Name}`} roundedTop="lg" />
        </Box>

        <Box p="6">
          {/* New badge (optional) */}
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>

          {/* Product name and add to cart button */}
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.Name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement="top"
              color="gray.800"
              fontSize="1.2em"
            >
              <chakra.a href="#" display="flex">
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf="center" />
              </chakra.a>
            </Tooltip>
          </Flex>

          {/* Product rating and price */}
          <Flex justifyContent="space-between" alignContent="center">
            <Rating
              rating={data.rating ? data.rating : 4.5}
              numReviews={data.numReviews ? data.numReviews : 265}
            />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color="gray.600" fontSize="lg">
                ₹
              </Box>
              {data.Price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;

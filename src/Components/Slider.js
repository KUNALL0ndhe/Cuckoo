import { Box, RadioGroup, Radio, Stack, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import OfferCard from "./OfferCards";

const Slider = () => {
  const [value, setValue] = useState("24 months");

  return (
    <Box
      p={4}
      rounded="md"
      border="1px"
      borderColor="gray.200"
      display="flex"
      alignItems="center"
      fontSize='4xl'
      mb='2rem'
    >
      <Text fontWeight="bold" mr={4}>
        Choose your contract length:
      </Text>

      <Box position="relative" display="inline-block" >
        <RadioGroup
          value={value}
          onChange={setValue}
          position="relative"
          display="flex"
          px={6}
          border="1px solid"
          borderColor="black"
          rounded="full"
          w="fit-content"
          bg="white"
        >
          {/* Animated Background Box */}
          <Box
            position="absolute"
            top="0"
            left={value === "24 months" ? "0" : "50%"}
            h="100%"
            w="50%"
            bg="purple.300"
            borderRadius="full"
            transition="left 0.3s ease"
          />

          <Stack direction="row" spacing={3} position="relative" zIndex={1}>
            <Radio
              value="24 months"
              position="relative"
              zIndex={1}
              size='xl'
              sx={{
                "& > span": {
                  display: "none", // Hide the blue dot
                },
              }}
            >
              <Text
                color={value === "24 months" ? "black" : "gray.400"}
                fontWeight={value === "24 months" ? "bold" : "normal"}
              >
                24 months
              </Text>
            </Radio>

            <Radio
              value="12 months"
              position="relative"
              zIndex={1}
              size='xl'
              sx={{
                "& > span": {
                  display: "none", // Hide the blue dot
                },
              }}
            >
              <Text
                color={value === "12 months" ? "black" : "gray.400"}
                fontWeight={value === "12 months" ? "bold" : "normal"}
              >
                12 months
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Slider;

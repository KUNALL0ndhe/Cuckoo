import React from 'react';
import egg from '../video/egg.mp4';
import { Flex, Button, Input, InputGroup, InputRightElement, Text, Box } from '@chakra-ui/react';

const LastScreen = () => {
  return (
    <Flex position="relative" width="100%" height="760px">
      {/* Background Video */}
      <video
        src={egg}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Overlay Container */}
      <Box
        position="absolute"
        top="50%"
        left="12%"
        transform="translateY(-50%)"
        zIndex="2"
        color="black"
        textAlign="left"
        maxW="500px"
      >
        {/* Title */}
        <Text fontSize="4xl" fontWeight="bold" mb={4} lineHeight="1.2">
          How Fast can <br />
          you go?
        </Text>

        {/* Form */}
        <form>
          <InputGroup size="lg" mb={4}>
            <Input
              placeholder="Enter Postcode"
              bg="white"
              w="20rem"
              height="60px" // Make the input height bigger
              border="none" // Remove border to match the image
              _focus={{ border: 'none' }} // Remove focus border
            />
            <InputRightElement width="auto" height="100%">
              <Button
                h="60px" // Make the button height bigger
                w="8rem"
                color="white"
                bgColor="black"
                borderRadius="0 8px 8px 0"
                _hover={{ bg: 'gray.700' }}
              >
                Check availability
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>
    </Flex>
  );
};

export default LastScreen;

import React, { useRef } from "react";
import { Box, Text, Badge, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const PlanCard = ({ planName, speed, features, price, bgColor, videoSrc }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.style.opacity = 1; // Show video on hover
      videoRef.current.style.transform = 'scale(1.1)'; // Scale up for pop effect
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to start
      videoRef.current.style.opacity = 0; // Hide video when not hovered
      videoRef.current.style.transform = 'scale(1)'; // Reset scale
    }
  };

  return (
    <Box
      position="relative"
      width="600px"
      height="600px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Video Background */}
      <Box
        as="video"
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        autoPlay={false}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="120%"
        objectFit="cover"
        zIndex={-1}
        opacity={0} // Initially hidden
        transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out" // Add transform transition
      />

      {/* Plan Card */}
      <Box
        border="2px solid"
        fontSize='3xl'
        borderColor="gray.300"
        _hover={{ borderColor: 'black' }}
        borderRadius="xl"
        overflow="hidden"
        w="80%" // Make the card smaller to give space to the video
        h="85%"
        bg={bgColor || "gray.100"}
        boxShadow="md"
        position="relative"
        zIndex={1}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Plan Content */}
        <Box bg={bgColor || "gray.100"} p={4} textAlign="center">
          <Text fontSize="5xl" fontWeight="bold">
            {planName}
          </Text>
        </Box>

        {/* Speed Badge */}
        <Box display="flex" justifyContent="center" alignItems="center" mt={2} bgColor="white">
          <Badge
            borderRadius="full"
            px="3"
            py="1"
            rounded="2xl"
            border="1px"
            colorScheme="blackAlpha"
            bg={"white"}
            fontSize="md"
          >
            {speed}
          </Badge>
          <Text ml={2} fontWeight="bold">
            Download speed
          </Text>
        </Box>

        {/* Features */}
        <List spacing={2} p={4} bgColor="white">
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListIcon as={FaCheck} color="green.500" />
              {feature}
            </ListItem>
          ))}
        </List>

        {/* Price Section */}
        <Button
          bg={bgColor || "gray.100"}
          color="black"
          p={2}
          textAlign="center"
          mt={2}
          zIndex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Text display="flex" px='24' fontSize="xl" fontWeight="bold" justifyItems="center" justifyContent="center" alignItems="center">
            £{price}/month <IoIosArrowDroprightCircle />
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default PlanCard;

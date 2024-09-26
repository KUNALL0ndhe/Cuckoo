import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
  Text,
  Container,
} from '@chakra-ui/react';

const Dropper = ({ sections }) => {
  return (
    <Container maxW="container.lg" w='100rem' centerContent py={10}>
      <Accordion 
        allowToggle 
        w="100%" // Full width to make it large
        maxW="800px" // Sets a max width for larger screens
        bg="#f9baff" // Match background color to the pinkish tone in the image
        borderRadius="20px"
        overflow="hidden"
        p={6}
      >
        {sections.map((section, index) => (
          <AccordionItem 
            key={index} 
            border="none" 
            mb={4} // Increased margin for spacing between items
          >
            <h2>
              <AccordionButton 
                _expanded={{ bg: 'white', color: 'black', borderRadius: "10px" }}
                borderRadius="10px"
                bg="white"
                p={6} // Increased padding for larger buttons
                boxShadow="md" // Add shadow to the cards
              >
                <Box 
                  as="span" 
                  flex="1" 
                  textAlign="left" 
                  fontWeight="bold" 
                  fontSize="xl" // Larger font size
                >
                  {section.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}  px={6} bg="white" borderRadius="10px">
              <VStack align="start" spacing={2}>
                <Text fontSize="xl">{section.content}</Text> {/* Larger content font size */}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default Dropper;

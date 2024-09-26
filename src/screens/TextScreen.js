import { Heading, Text, Flex, Link, Image, Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion for animation
import whosh from '../Img/whosh.png';
import DropperScreen from "./dropScreen";
import Coursel from "../Components/Coursel";

// Create a motion component for the Image
const MotionImage = motion(Image);

const TextScreen = () => {
  return (
    <Flex direction='column' alignItems='center' bgColor="rgba(243, 176, 255, 1)">
      <Heading as='h4' px='13rem' fontWeight='bold' fontSize='8xl' mb='12'>
        Serving up full fibre (and full <br />fibre only)
      </Heading>
      
      <Heading as='h3' fontFamily='lg' fontWeight='sm' fontSize='5xl' mb='12'>
        We don’t use older, copper wire connections that<br />
        come from those green cabinets on the street,<br />
        because they’re so much slower and break down far<br />
        too easily.
      </Heading>
      
      <Heading as='h3' px='13rem' fontFamily='lg' fontWeight='sm' fontSize='5xl'>
        Instead, our{" "}
        <Text as={Link} _hover={{ textDecoration: 'none' }} to="/your-link" color="blue.500">
          broadband
        </Text>{" "}
        uses fibre optic cables that<br /> run directly into your home,
        allowing us to give you <br />brilliantly fast speeds with amazing reliability.
      </Heading>

      <Box mt='50px'>
        <Button 
          px='5rem' 
          rounded='xl' 
          border='1px' 
          borderRadius='3xl' 
          _hover={{ borderRadius: 'xl', transition: '0.3s', px: '6rem' }} 
          fontWeight='semibold' 
          fontSize='4xl' 
          h='5rem' 
          variant='outline'>
          Find out more about full fibre
        </Button>
      </Box>

      {/* Motion Image for Smooth Transition */}
      <Box width="100%" overflow="hidden" mt='20px'>
        <MotionImage 
          src={whosh} 
          alt='Whooshhh...' 
          width="100%" 
          height="auto" 
          initial={{ x: '-100%' }} // Start off-screen to the left
          animate={{ x: 0 }} // Move to the center
          transition={{ duration: 1 }} // Transition duration
        />
      </Box>
      <Box bgColor="rgba(243, 176, 255, 1)" h='450%' w="100%">
      <Heading as='h4' px='13rem' fontWeight='bold' fontSize='8xl' mb='12'>
      Still not sure? Tell us what’s<br />
      bothering you.
      </Heading>
      <Heading as='h3' px='13rem' fontFamily='lg' fontWeight='sm' fontSize='5xl'>
      We’ve seen and heard it all, so we’re pretty confident<br /> we can help you too.
        </Heading>
      </Box>
      <DropperScreen />

      <Heading as='h4' px='13rem' fontWeight='bold' fontSize='8xl' mb='12'>
      Guiding you every step of<br />the way
      </Heading>
      
      <Heading as='h3' fontFamily='lg' fontWeight='sm' fontSize='5xl' mb='12'>
      We get it, the internet can be a confusing place. So<br />
      we’ve put together a bunch of simple guides to help<br />
      explain its more fiddly bits. You don’t even have to be in<br />
      our flock to read them (we’re generous like that).
      </Heading>

      <Coursel />
      
    </Flex>
  );
}

export default TextScreen;

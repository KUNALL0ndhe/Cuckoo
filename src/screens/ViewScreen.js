import { Flex, Button,Input,InputGroup,InputRightElement, Text, Image, Spacer } from '@chakra-ui/react';
import cuckoo from '../video/cuckoo.mp4';
import amazon from '../Img/amazon.png'

const ViewScreen = () => {
  return (
    <Flex
      className='main'
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 9,
      }}
    >
      {/* Background Video */}
      <video
        src={cuckoo}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '760px',
          objectFit: 'cover',
          zIndex: 99
        }}
      />

      {/* Overlay Main Text - Positioned in the left middle */}
      <Text
        position="absolute"
        top="20%" 
        left="12%" 
        transform="translateY(-50%)" 
        textAlign="left" 
        color="Black"
        fontWeight="bold"
        fontSize="8xl"
        zIndex="999"
      >
        Fast, fair, feel- <br />
        good broadband
      </Text>

      <Spacer />

      <Text
        position="absolute"
        top="50%" 
        left="12%" 
        transform="translateY(-50%)" 
        textAlign="left" 
        color="Black"
        fontSize="4xl" 
        zIndex="999"
      >
        Full fibre speeds and the best customer service <br/>you've ever had.
        <br/>
        <form>
      <InputGroup size="lg">
        <Input 
          placeholder="Enter Postcode" 
          bg="white"      // Make background white
          height="60px"   // Increase the height of the input
          border="none"   // Remove border to match the image
          _focus={{ border: 'none' }}  // Remove focus border
        />
        <InputRightElement width="auto" height="100%">
          <Button
            h="60px"      // Make the button height bigger
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
      </Text>

    

      <Image
        src={amazon}
        alt="Bottom Right Image"
        position="absolute"
        bottom="10%" 
        right="10%"  
        h='350px'
        w='600px'
        borderLeftRadius='3xl'
        borderRightRadius='3xl'
        zIndex="999"
        transform="rotate(-15deg)"
      />
    </Flex>
  );
};

export default ViewScreen;

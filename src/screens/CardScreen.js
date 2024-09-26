import { Card, CardHeader, CardBody, Image, SimpleGrid, Heading, Text, Flex } from '@chakra-ui/react';
import RocketMoon from '../Img/RocketMoon.png';
import Win from '../Img/Win.png';
import bond from '../Img/bond.png';

const CardScreen = () => {
  return (
    <Flex justifyContent='center' mt='8rem' mb='8rem' >
      <SimpleGrid spacing={8} templateColumns='repeat(3, 1fr)' maxW='90rem' width='full' > {/* Set 3 columns and increased spacing */}
        <Card maxW='400px' bgColor='gray.100' borderRadius='3xl'> {/* Set max width for cards */}
          <Image
            src={RocketMoon}
            alt='Rocket image'
            h='250px'
            objectFit='contain'
            mb={4}
          />
          <CardHeader>
            <Heading size='2xl'>Speeds up to 900Mbps</Heading> {/* Adjusted size */}
          </CardHeader>
          <CardBody fontSize='2xl'>
            <Text>Full fibre speeds that easily handle all the streaming, gaming, and WFHing you can throw at it.</Text>
          </CardBody>
        </Card>

        <Card maxW='400px' bgColor='gray.100' borderRadius='3xl'> {/* Set max width for cards */}
          <Image
            src={Win}
            alt='Trophy image'
            h='250px'
            objectFit='contain'
            mb={4}
          />
          <CardHeader>
            <Heading size='2xl'>Voted #1 for our service</Heading> {/* Adjusted size */}
          </CardHeader>
          <CardBody fontSize='2xl'>
            <Text>We’ve topped MoneySavingExpert’s broadband poll for customer service... twice!</Text>
          </CardBody>
        </Card>

        <Card  maxW='full' bgColor='gray.100' borderRadius='3xl'> {/* Set max width for cards */}
          <Image
            src={bond}
            alt='Price image'
            h='250px'
            objectFit='contain'
            mb={4}
          />
          <CardHeader>
            <Heading size='2xl'>Fair prices,<br/> always</Heading> {/* Adjusted size */}
          </CardHeader>
          <CardBody fontSize='25px' fontWeight='xs'>
            <Text>No sneaky tricks. We'll always get you the very best price and stay totally honest about what you're paying for.</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
};

export default CardScreen;

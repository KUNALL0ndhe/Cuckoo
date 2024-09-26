import React from 'react';
import { Flex, Heading, Box } from "@chakra-ui/react";
import  Dropper from '../Components/Dropper';

const DropperScreen = () => {
  const sectionsData = [
    { title: 'Why should I choose Cuckoo?', content: 'Content for section 1' },
    { title: 'Isn’t switching a hassle?', content: 'Content for section 2' },
    { title: 'Can I sign up over the phone?', content: 'Content for section 3' },
    { title: 'What are the benefits of full fibre?', content: 'Content for section 4' },
    { title: 'What speed do I need?', content: 'Content for section 5' },
    { title: 'How do I know my current speed?', content: 'Content for section 6' },
    { title: 'What if full fibre isn’t available where I live?', content: 'Content for section 7' },
  ];

  return (
    <Flex direction='column' alignItems='center' p='4'>
      <Box width='full' maxW='full' bgColor="rgba(243, 176, 255, 1)" >
        <br/>
        <Dropper sections={sectionsData} />
      </Box>
    </Flex>
  );
};

export default DropperScreen;

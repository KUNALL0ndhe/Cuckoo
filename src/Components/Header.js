import { Flex, Box, Link, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FiChevronDown, FiWifi, FiUsers, FiPhoneCall, FiHelpCircle, FiLogIn, FiUserPlus } from "react-icons/fi";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="80px"
      w="100%"
      pos="fixed"
      fontSize='2xl'
      top="0"
      left="0"
      bg="yellow"
      boxShadow="sm"
      zIndex="10"
    >
      {/* Logo Section */}
      <Box>
  <Link href="/" >
    <img src="/images/sample1.avif" alt="Cuckoo Logo" style={{ height: '50px' }} />
  </Link>
</Box>


      {/* Nav Links Section */}
      <Flex align='center' justifyItems='center' alignItems='center' gap="6">
        {/* Dropdown for Broadband */}
        <Menu>
          <MenuButton as={Link} fontWeight="bold" _hover={{ textDecoration: "none"}}>
            Broadband
          </MenuButton><FiChevronDown />
          <MenuList bgColor='beige'>
            <MenuItem >Broadband Plans</MenuItem>
            <MenuItem >Coverage Area</MenuItem>
            <MenuItem >Broadband FAQ</MenuItem>
          </MenuList>
        </Menu>

        {/* Dropdown for About */}
        <Menu>
          <MenuButton as={Link} fontWeight="bold" _hover={{ textDecoration: "none"}}>
            About
          </MenuButton><FiChevronDown  />
          <MenuList bgColor='beige'>
            <MenuItem >Company Info</MenuItem>
            <MenuItem >Team</MenuItem>
            <MenuItem >Careers</MenuItem>
          </MenuList>
        </Menu>

        {/* Dropdown for Support */}
        <Menu>
          <MenuButton as={Link} fontWeight="bold" _hover={{ textDecoration: "none"}}>
            Support
          </MenuButton><FiChevronDown />
          <MenuList bgColor='beige'>
            <MenuItem >Contact Support</MenuItem>
            <MenuItem >Help Center</MenuItem>
            <MenuItem >Live Chat</MenuItem>
          </MenuList>
        </Menu>

        {/* Log in & Sign up */}
        <Link href="#login" fontWeight="bold" _hover={{ textDecoration: "none"}}>
          <Flex align="center">
            Log in
          </Flex>
        </Link>
        <Button bgColor="black" color='white' variant="solid" fontSize='2xl' alignItems='center' justifyContent='center' justifyItems='center'  py='7' borderTopLeftRadius='lg' borderTopRightRadius='lg' fontWeight="bold" >
          Sign up
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;

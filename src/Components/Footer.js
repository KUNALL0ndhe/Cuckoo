import React from 'react';
import { Box, Grid, GridItem, Text, UnorderedList, ListItem, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box bgColor="yellow" p={16}>
            <Grid templateColumns="repeat(2, 1fr)" gap={16}>
                {/* Left Section */}
                <GridItem>
                    <Text fontSize="3xl" fontWeight="bold" mb={6}>
                        Fast, fair,<br />
                        feel-good<br />
                        broadband
                    </Text>
                    <Box display="flex" gap={6} mt={4}>
                        <Icon as={FaFacebook} boxSize={10} />
                        <Icon as={FaTwitter} boxSize={10} />
                        <Icon as={FaInstagram} boxSize={10} />
                        <Icon as={FaLinkedin} boxSize={10} />
                    </Box>
                </GridItem>

                {/* Right Section */}
                <GridItem>
                    <Grid templateColumns="repeat(3, 1fr)" gap={12}>
                        <GridItem>
                            <Text fontSize="xl" fontWeight="bold">Company</Text>
                            <UnorderedList spacing={3}>
                                <ListItem>About</ListItem>
                                <ListItem>Careers</ListItem>
                                <ListItem>Help & Contact</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem>
                            <Text fontSize="xl" fontWeight="bold">Support</Text>
                            <UnorderedList spacing={3}>
                                <ListItem>Contact us</ListItem>
                                <ListItem>Blog</ListItem>
                                <ListItem>Press</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem>
                            <Text fontSize="xl" fontWeight="bold">Useful links</Text>
                            <UnorderedList spacing={3}>
                                <ListItem>999 Emergency (BSL)</ListItem>
                                <ListItem>Terms & Conditions</ListItem>
                                <ListItem>Privacy Notice</ListItem>
                                <ListItem>Cookie Policy</ListItem>
                                <ListItem>Complaints Code</ListItem>
                                <ListItem>Prices & Charge list</ListItem>
                                <ListItem>Vulnerable Customer Policy</ListItem>
                                <ListItem>Acceptable Use Policy</ListItem>
                                <ListItem>Website Acceptable Use</ListItem>
                                <ListItem>Website Terms</ListItem>
                                <ListItem>Cookie preferences</ListItem>
                            </UnorderedList>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>

            {/* Footer Text */}
            <Text textAlign="center" mt={8} fontSize="lg" color="gray.700">
                © 2024 Cuckoo Fibre Ltd is a company registered in England and Wales (No 15060036).<br />
                Our registered address is 6th Floor, 33 Holborn, London, EC1N 2HT. Our VAT number is 451054916.<br />
                Cuckoo Fibre Ltd is regulated by Ofcom.
            </Text>
        </Box>
    );
};

export default Footer;

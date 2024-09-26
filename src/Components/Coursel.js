import React, { useState } from 'react';
import { Box, Image, Text, Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from '../Img/one.avif';
import two from '../Img/two.avif';
import three from '../Img/three.avif';
import four from '../Img/four.avif';
import five from '../Img/five.avif';
import six from '../Img/six.avif';

const Coursel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      image: one,
      title: "What's mesh Wi-Fi when it’s actually at home?",
      badge: "Guide",
    },
    {
      image: two,
      title: "Full Fibre (FTTP): Top 10 benefits",
      badge: "Guide",
    },
    {
      image: three,
      title: "How to boost your Wi-Fi signal in your home",
      badge: "Guide",
    },
    {
      image: four,
      title: "Another Title",
      badge: "Guide",
    },
    {
      image: five,
      title: "Yet Another Title",
      badge: "Guide",
    },
    {
      image: six,
      title: "One More Title",
      badge: "Guide",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024, // Tablets and larger
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="md" maxW="100%" mx="auto">
      {/* Breadcrumb for progress */}
      <Center mb={4}>
        <Breadcrumb separator="|">
          {cards.map((_, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink
                color={currentSlide === index ? "blue.500" : "gray.500"}
                fontWeight={currentSlide === index ? "bold" : "normal"}
              >
                {index + 1}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Center>

      {/* Slider */}
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            key={index}
            p={4}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            borderWidth="1px"
            borderColor="gray.200"
            textAlign="center"
            mx={2} // Add margin between the cards
          >
            {/* Image */}
            <Image
              src={card.image}
              alt={`Photo ${index + 1}`}
              objectFit="cover"
              borderBottomWidth="1px"
              borderColor="gray.200"
              borderRadius="md"
              height="200px"
              mb={4}
              width="100%" // Ensure full width image inside the card
            />
            {/* Badge */}
            <Badge
              colorScheme="pink"
              borderRadius="full"
              px="2"
              py="1"
              mb={2}
            >
              {card.badge}
            </Badge>
            {/* Title */}
            <Text fontWeight="bold" fontSize="lg">
              {card.title}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Coursel;

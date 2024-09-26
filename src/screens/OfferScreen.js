import PlanCard from "../Components/OfferCards"
import { Grid, GridItem } from "@chakra-ui/react";
import video1 from '../video/video1.mp4';
import video2 from '../video/video2.mp4';
import video3 from '../video/video3.mp4';

const OfferScreen = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={2} mb='60rem'>
      <GridItem w='100%' h='10'>
        <PlanCard
          planName="C-150"
          speed="500Mbps"
          features={[
            "Super smart eero Pro 6E router",
            "24 month fixed-price contract",
            "No phone line needed",
          ]}
          price="28"
          bgColor="cyan.300"
          videoSrc={video1} // Assign video for the first card
        />
      </GridItem>
      <GridItem w='100%' h='10'>
        <PlanCard
          planName="C-500"
          speed="500Mbps"
          features={[
            "Super smart eero Pro 6E router",
            "24 month fixed-price contract",
            "No phone line needed",
          ]}
          price="35"
          bgColor="purple.500"
          videoSrc={video2} // Assign video for the second card
        />
      </GridItem>
      <GridItem w='100%' h='10'>
        <PlanCard
          planName="C-900"
          speed="500Mbps"
          features={[
            "Super smart eero Pro 6E router",
            "24 month fixed-price contract",
            "No phone line needed",
          ]}
          price="42"
          bgColor="yellow"
          videoSrc={video3} // Assign video for the third card
        />
      </GridItem>
    </Grid>
  );
}

export default OfferScreen;
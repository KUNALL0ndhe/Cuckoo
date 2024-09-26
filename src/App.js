import { Flex } from "@chakra-ui/react";
import Header from "./Components/Header";
import ViewScreen from './screens/ViewScreen'
import CardScreen from "./screens/CardScreen";
import Slider from "./Components/Slider";
import OfferScreen from "./screens/OfferScreen";
import TextScreen from "./screens/TextScreen";
import LastScreen from "./screens/LastScreen";
import Footer from "./Components/Footer";

const App = () => {
  return (
  <>
  <Header />

  <Flex
    as='main'
    mt='59px'
    direction='column'
    py='6'
    px='6'></Flex>

    <ViewScreen/>
    <CardScreen/>
    <Slider/>
    <OfferScreen/>
    <TextScreen/>
    <LastScreen/>
    <Footer />

  </>
  )
}

export default App;

import { Flex, Divider, Heading } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <TravelTypes />
      
      <Divider mx='auto' mt='20' w='90px' borderWidth='2px' borderColor='gray.600' bg='gray.600' />

      <Heading
        textAlign='center'
        mt='14'
        color='gray.600'
        fontWeight='medium'
      >
        Vamos nessa? <br/> Então escolha seu continente
      </Heading>

      <Carousel />
    </Flex>
  )
}

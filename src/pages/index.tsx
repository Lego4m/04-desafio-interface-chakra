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
      
      <Divider 
        w={['60px', '90px']} 
        mt={['9', '20']}
        mx='auto' 
        borderWidth={['1px', '2px']} 
        borderColor='gray.600' 
        bg='gray.600' 
      />

      <Heading
        textAlign='center'
        color='gray.600'
        mt={['6', '14']}
        px={['4', '8']}
        fontSize={['xl', '4xl']}
        lineHeight={['1,875rem', '3,375rem']}
        fontWeight='medium'
      >
        Vamos nessa? <br/> Então escolha seu continente
      </Heading>

      <Carousel />
    </Flex>
  )
}

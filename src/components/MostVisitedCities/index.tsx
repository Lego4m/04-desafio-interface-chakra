import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { CityCard } from './CityCard';

export function MostVisitedCities() {

  return (
    <Flex
      direction='column'
      maxWidth={1160}
      width='100%'
      mx='auto'
      mt={['8', '20']}
      px={['4', '8']}
    >
      <Heading 
        color='gray.600' 
        fontWeight='medium'
        fontSize={['2xl', '4xl']}
        lineHeight={['9', '3.375rem']}
      >
        Cidades +100
      </Heading>

      <SimpleGrid
        mt={['5', '10']}
        minChildWidth='279px'
        spacing={['4', '12']}
        justifyItems='center'
      >
        <CityCard 
          city='Londres'
          country='Reino Unido'
          bannerUrl='/ContinentsImgs/europe/londres.png'
          flagUrl='/ContinentsImgs/flags/UnitedKingdom.png'
        />
      </SimpleGrid>
    </Flex>
  )
}
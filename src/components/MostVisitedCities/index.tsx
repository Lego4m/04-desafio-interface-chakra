import { Flex, Grid, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
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

      <Flex
        mt={['5', '10']}
        gap={['4', '12']}
        justify={['center', 'flex-start']}
        flexWrap='wrap'
      >
        <CityCard 
          city='Londres'
          country='Reino Unido'
          bannerUrl='/ContinentsImgs/europe/londres.png'
          flagUrl='/ContinentsImgs/flags/UnitedKingdom.png'
        />
      </Flex>
    </Flex>
  )
}
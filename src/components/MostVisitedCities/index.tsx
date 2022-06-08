import { Flex, Heading } from '@chakra-ui/react';
import { CityCard } from './CityCard';

export function MostVisitedCities() {

  return (
    <Flex
      direction='column'
      maxWidth={1160}
      width='100%'
      mx='auto'
      mt='20'
    >
      <Heading 
        color='gray.600' 
        fontWeight='medium'
        fontSize='4xl'
        lineHeight='3.375rem'
      >
        Cidades +100
      </Heading>

      <Flex
        mt='10'
        justify='center'
        flexWrap='wrap'
        gap='12'
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
import { Flex, Heading } from '@chakra-ui/react';
import { CityCard } from './CityCard';

type City = {
  id: string;
  name: string;
  image: string;
  country: {
    name: string;
    flag: string;
  }
}

interface MostVisitedCitiesProps {
  cities: City[];
}

export function MostVisitedCities({ cities }: MostVisitedCitiesProps) {
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
        { cities.map((city) => (
          <CityCard 
            key={city.id}
            city={city.name}
            image={city.image}
            country={city.country.name}
            flag={city.country.flag}
          />
        )) }
      </Flex>
    </Flex>
  )
}
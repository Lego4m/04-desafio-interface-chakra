import { Stack, Flex, Text } from '@chakra-ui/react';
import { InfoItem } from './InfoItem';

interface ContinentInfosProps {
  continent: {
    brief: string;
    details: {
      countries: number;
      languages: number;
      citiesMoreThan100: unknown[];
    }
  }
}

export function ContinentInfos({ continent }: ContinentInfosProps) {
  return (
    <Stack 
      direction={['column', 'column', 'column', 'row']} 
      maxWidth={1160} 
      width='100%'
      mx='auto' 
      px={['4', '8']}
      mt={['6', '20']}
      spacing={['4', '16']}
      color='gray.600'
    >
      <Flex flex='1'>
        <Text
          textAlign='justify'
          fontSize={['sm', '2xl']}
          lineHeight={['5', '9']}
          color='gray.600'
        >
          {continent.brief}
        </Text>
      </Flex>
      
      <Flex 
        flex='1' 
        justify='space-evenly'
        align='center'
      >
        <InfoItem quantity={continent.details.countries} item='países' />
        <InfoItem quantity={continent.details.languages} item='línguas' />
        <InfoItem 
          quantity={continent.details.citiesMoreThan100.length} 
          item='cidades +100' 
          label='Cidades que estão entre as 100 mais visitadas do mundo.' 
        />
      </Flex>
    </Stack>
  )
}
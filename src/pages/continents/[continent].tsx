import { Flex } from '@chakra-ui/react';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfos } from '../../components/ContinentInfos';
import { Header } from '../../components/Header';
import { MostVisitedCities } from '../../components/MostVisitedCities';

export default function Continent() {
  return (
    <Flex direction='column'
      pb={['4', '9']}
    >
      <Header />
      <ContinentBanner />
      <ContinentInfos />
      <MostVisitedCities />
    </Flex>
  )
}
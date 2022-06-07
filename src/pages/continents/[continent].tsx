import { Flex } from '@chakra-ui/react';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfos } from '../../components/ContinentInfos';
import { Header } from '../../components/Header';

export default function Continent() {
  return (
    <Flex direction='column'>
      <Header />
      <ContinentBanner />
      <ContinentInfos />
    </Flex>
  )
}